<?php

namespace App\Models;

use Bigperson\Exchange1C\Interfaces\OfferInterface;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model implements OfferInterface
{
    use HasFactory;
    protected $guarded = [];

    public function getExportFields1c($context = null)
    {
        // return [
        //     'Ид' => 'id',
        //     'НомерВерсии' => 'version',
        // ];
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
     * @return GroupInterface
     */

    public function getGroup1c()
    {
        return $this->product->category;
    }

    /**
     * offers.xml > ПакетПредложений > Предложения > Предложение > Цены.
     *
     * Цена товара,
     * К $price можно обратиться как к массиву, чтобы получить список цен (Цены > Цена)
     * $price->type - тип цены (offers.xml > ПакетПредложений > ТипыЦен > ТипЦены)
     *
     * @param \Zenwalker\CommerceML\Model\Price $price
     *
     * @return void
     */
    public function setPrice1c($price)
    {
    }

    /**
     * @param $types
     *
     * @return void
     */
    public static function createPriceTypes1c($types)
    {
        foreach ($types as $type) {
            PriceType::createByMl($type);
        }
    }

    /**
     * @param @param \Zenwalker\CommerceML\Model\Offer $offer
     *
     * @return \App\Moels\Offer
     */
    public static function createByMl($offer): Offer
    {
        return Offer::firstOrCreate(
            ['accounting_id' => $offer->id],
            [
                'title' => (string)$offer->name,
                'quantity' => (float)$offer->Количество,
            ]
        );
    }


    protected function quantity(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => floatVal($value / 100),
            set: fn ($value) => intVal($value * 100),
        );
    }

    /**
     * offers.xml > ПакетПредложений > Предложения > Предложение > ХарактеристикиТовара > ХарактеристикаТовара.
     *
     * Характеристики товара
     * $name - Наименование
     * $value - Значение
     *
     * @param \Zenwalker\CommerceML\Model\Simple $specification
     *
     * @return void
     */
    public function setSpecification1c($specification)
    {
    }
}
