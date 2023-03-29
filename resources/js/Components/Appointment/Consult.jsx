import InputError from "../InputError";
import InputLabel from "../InputLabel";
import PrimaryButton from "../PrimaryButton";
import TextArea from "../TextArea";
import TextInput from "../TextInput";

const elements = [
    {
        code: `сomplaints`,
        title: `Жалобы`,
        height: `height-12`
    },
    {
        code: `anmorbi`,
        title: `An.morbi`,
        height: `height-12`
    },
    {
        code: `anvitae`,
        title: `An.vitae`,
        height: `height-12`
    },
    {
        code: `stlocalic`,
        title: `St.localis`,
        height: `height-12`
    },
    {
        code: `traumasurgery`,
        title: `Хирургические вмешательства или травмы`,
        height: `height-12`
    },
    {
        code: `laboratorydata`,
        title: `Данные лабораторных/инструментальных методов обследования`,
        height: `height-12`
    },
    {
        code: `adddiagnosticexam`,
        title: `Дополнительное диагностическое обследование`,
        height: `height-12`
    },
    {
        code: `consultspecialists`,
        title: `Конультация специалистов`,
        height: `height-12`
    },
    {
        code: `conclusion`,
        title: `Заключение`,
        height: `height-24`
    },
    {
        code: `recommendations`,
        title: `Рекомендации`,
        height: `height-24`
    },
]

export default (props) => {
    const { data, setData, handleOnChange, errors, setTab } = props;
    return <>
        <div className={`bg-blue-80 rounded-lg p-5`}>
            {elements.map((el, edx) => <div key={edx} className="mb-4">
                <InputLabel htmlFor={el.code} value={el.title} color={`text-black`} weight={`font-semibold`} size={`text-sm`} />
                <TextArea
                    id={el.code}
                    type="text"
                    name={el.code}
                    placeholder=""
                    bg="bg-white"
                    border="border-0"
                    rounded="rounded-lg"
                    value={data[el.code]}
                    className="mt-1 block w-full"
                    onChange={handleOnChange}
                />
                <InputError message={errors.surname} className="mt-2" />
            </div>)}
        </div>
        <div className={`flex justify-end py-8`}>
            <a href={`#`} onClick={e => {
                e.preventDefault();
                setTab({
                    title: "ОДС",
                    code: "ods",
                });
            }}>
                <PrimaryButton size="sm">Далее</PrimaryButton>
            </a>
        </div>
    </>
}

