<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Bigperson\Exchange1C\Interfaces\ProductInterface;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Product extends Model implements \Bigperson\Exchange1C\Interfaces\ProductInterface
{
    use HasFactory;



    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }


    public function requisites(): BelongsToMany
    {
        return $this->belongsToMany(Requisite::class, 'product_requisite')->withPivot('value');
    }

    public function properties(): HasMany
    {
        return $this->hasMany(ProductProperty::class);
    }
    /**
     * Возвращаем имя поля в базе данных, в котором хранится ID из 1с
     *
     * @return string
     */
    public static function getIdFieldName1c()
    {
        return 'accounting_id';
    }

    /**
     * Получение уникального идентификатора продукта в рамках БД сайта.
     *
     * @return int|string
     */
    public function getPrimaryKey()
    {
        return 'id';
    }

    /**
     * Если по каким то причинам файлы import.xml или offers.xml были модифицированы и какие то данные
     * не попадают в парсер, в самом конце вызывается данный метод, в $product и $cml можно получить все
     * возможные данные для ручного парсинга.
     *
     * @param \Zenwalker\CommerceML\CommerceML    $cml
     * @param \Zenwalker\CommerceML\Model\Product $product
     *
     * @return void
     */
    public function setRaw1cData($cml, $product)
    {
    }

    /**
     * Установка реквизитов, (import.xml > Каталог > Товары > Товар > ЗначенияРеквизитов > ЗначениеРеквизита)
     * $name - Наименование
     * $value - Значение.
     *
     * @param string $name
     * @param string $value
     *
     * @return void
     */
    public function setRequisite1c($name, $value)
    {
        if (!$requisite = Requisite::where('title', $name)->first()) {
            $requisite = new Requisite();
            $requisite->title = $name;
            $requisite->save();
        }
        $this->requisites()->syncWithoutDetaching([$requisite->id => ['value' => $value]]);
    }

    /**
     * Предпологается, что дерево групп у Вас уже создано (\carono\exchange1c\interfaces\GroupInterface::createTree1c).
     *
     * @param \Zenwalker\CommerceML\Model\Group $group
     *
     * @return mixed
     */
    public function setGroup1c($group)
    {
        // $category = Category::where('accounting_id', $group->id)->first();
        // $category && $this->category_id = $category->id;
        // $this->save();
    }

    /**
     * import.xml > Классификатор > Свойства > Свойство
     * $property - Свойство товара.
     *
     * import.xml > Классификатор > Свойства > Свойство > Значение
     * $property->value - Разыменованное значение (string)
     *
     * import.xml > Классификатор > Свойства > Свойство > ВариантыЗначений > Справочник
     * $property->getValueModel() - Данные по значению, Ид значения, и т.д
     *
     * @param \Zenwalker\CommerceML\Model\Property $property
     *
     * @return void
     */
    public function setProperty1c($property)
    {
        $propertyModel = Property::where('accounting_id', $property->id)->first();
        $productPropertyModel = $this->properties()->where('property_id', $propertyModel->id)->first();
        if (!$productPropertyModel) $productPropertyModel = new ProductProperty();
        $productPropertyModel->product_id = $this->id;
        $productPropertyModel->property_id = $propertyModel->id;
        $propertyValue = $property->getValueModel();
        if ($propertyAccountingId = (string)$propertyValue->ИдЗначения) {
            $value = PropertyValue::where('accounting_id', $propertyAccountingId)->first();
            $productPropertyModel->property_value_id = $value->id;
        } else {
            $productPropertyModel->value = $propertyValue->value;
        }
        $productPropertyModel->save();
    }

    /**
     * @param string $path
     * @param string $caption
     *
     * @return void
     */
    public function addImage1c($path, $caption)
    {
        if (!$this->images()->where('md5', md5_file($path))->exists()) {
            if (Storage::put('products/' . $this->id . '/' . basename($path), file_get_contents($path)))
                $this->images()->create([
                    'md5' => md5_file($path),
                    'link' => 'products/' . $this->id . '/' . basename($path)
                ]);
        }
    }

    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'entity');
    }

    /**
     * @return GroupInterface
     */
    public function getGroup1c()
    {
        return null;
        // return $this->category;
    }

    /**
     * Создание всех свойств продутка
     * import.xml > Классификатор > Свойства.
     *
     * $properties[]->availableValues - список доступных значений, для этого свойства
     * import.xml > Классификатор > Свойства > Свойство > ВариантыЗначений > Справочник
     *
     * @param PropertyCollection $properties
     *
     * @return mixed
     */
    public static function createProperties1c($properties)
    {
        /**
         * @var \Zenwalker\CommerceML\Model\Property $property
         */
        foreach ($properties as $property) {
            $propertyModel = Property::createByMl($property);
            foreach ($property->getAvailableValues() as $value) {
                if (!$propertyValue = PropertyValue::where('accounting_id', (string)$value->ИдЗначения)->first()) {
                    $propertyValue = new PropertyValue();
                    $propertyValue->title = (string)$value->Значение;
                    $propertyValue->property_id = $propertyModel->id;
                    $propertyValue->accounting_id = (string)$value->ИдЗначения;
                    $propertyValue->save();
                    unset($propertyValue);
                }
            }
        }
    }

    /**
     * @param \Zenwalker\CommerceML\Model\Offer $offer
     *
     * @return OfferInterface
     */
    public function getOffer1c($offer)
    {
        $offerModel = Offer::createByMl($offer);
        $offerModel->product_id = $this->id;
        if ($offerModel->isDirty()) {
            $offerModel->save();
        }
        return $offerModel;
    }

    /**
     * @param \Zenwalker\CommerceML\Model\Product $product
     *
     * @return self
     */
    public static function createModel1c($product)
    {
        if (!$model = Product::where('accounting_id', $product->id)->first()) {
            $model = new Product();
            $model->accounting_id = $product->id;
        }
        $model->slug = Str::slug($product->name);
        $model->title = $product->name;
        $model->excerpt = (string)$product->Описание;
        $model->meta_description = (string)$product->Описание;
        $model->body = (string)$product->Описание;
        $model->article = (string)$product->Артикул;
        $model->save();
        return $model;
    }

    /**
     * @param string $id
     *
     * @return ProductInterface|null
     */
    public static function findProductBy1c(string $id): ?self
    {
        return self::where('accounting_id', $id)->first();
    }
}
