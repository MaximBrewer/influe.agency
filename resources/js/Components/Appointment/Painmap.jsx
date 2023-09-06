import { useEffect } from "react";
import Person from "../../../img/pain.webp"
import Level1 from "../../../img/painlevels/fine.png"
import Level2 from "../../../img/painlevels/good.png"
import Level3 from "../../../img/painlevels/norm.png"
import Level4 from "../../../img/painlevels/nogood.png"
import Level5 from "../../../img/painlevels/bad.png"
import Level6 from "../../../img/painlevels/worst.png"
import { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import Select, { components } from 'react-select';
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";

const customStyles = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return ({
            ...styles,
            borderRadius: `.25rem`,
            minHeight: `1.125rem`,
            outline: `none`,
            borderColor: `transparent`,
            boxShadow: `none`,
            flexWrap: `nowrap`
        })
    },
    placeholder: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return ({
            ...styles,
            whiteSpace: `nowrap`,
        })
    },
    singleValue: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return ({
            ...styles,
            fontWeight: 500,
        })
    },
    indicatorContainer: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return ({
            ...styles,
            padding: 2
        })
    },
    ValueContainer2: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return ({
            ...styles,
            padding: 0
        })
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return ({
            ...styles,
            paddingTop: `2px`,
            paddingBottom: `2px`,
        })
    },
    indicatorSeparator: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles,
        backgroundColor: `transparent`
    }),
};

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <svg width="16" height="6" className="text-purple-900" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.63656 5.35044L0.214103 0.86339C-0.241616 0.545002 0.0811491 0.000608444 0.725521 0.000608444L14.5935 0.000608444C15.238 0.000608444 15.5607 0.545002 15.105 0.86339L8.68252 5.35044C8.11757 5.74517 7.2015 5.74517 6.63656 5.35044Z" fill="currentColor" />
            </svg>
        </components.DropdownIndicator>
    );
};

const levels = [
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
]

const characters = [
    `Жгучая`,
    `Острая`,
    `Режущая`,
    `Стреляющая`,
    `Пульсирующая`,
    `Схваткообразная`,
    `Колющая`,
    `Ноющая`,
    `Тянущая`,
    `Тупая`,
    `Другое`
]

const departments = [
    { label: 'Шейный отдел', value: 'cervical' },
    { label: 'Грудной отдел', value: 'thoracic' },
    { label: 'Грудопоясничный отдел', value: 'thoracolumbar' },
    { label: 'Поясничный отдел', value: 'lumbar' },
    { label: 'Пояснично-крестцовый отдел', value: 'lumbosacral' },
    { label: 'Крестцово-копчиковой отдел', value: 'sacrococcygeal' },
]

const painlevels = [
    { label: 'Боли нет', value: 'nop' },
    { label: 'Боль незначительная', value: 'minor' },
    { label: 'Боль умеренная', value: 'moderate' },
    { label: 'Боль выраженная', value: 'expressed' },
    { label: 'Боль невыносимая', value: 'unbearable' },
]

const painnumlevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
    { label: i, value: i }
))


const PainMetter = ({ painData, setPainData, setPainDatas = () => { }, top = false, index = -1 }) => {

    return <div className="grow">
        <div className="flex gap-4 items-center mb-8">
            <div className="font-semibold shrink-0">Уровень боли</div>
            <div className={`grid grid-cols-3 gap-4 text-sm ${top ? `grow` : ``}`}>
                <Select
                    styles={customStyles}
                    components={{ DropdownIndicator }}
                    options={departments}
                    defaultValue={painData.department ? departments.find(el => el.value == painData.department) : departments[0]}
                    onChange={value => setPainData(prev => ({ ...prev, department: value.value }))}
                />
                <Select
                    styles={customStyles}
                    components={{ DropdownIndicator }}
                    options={painlevels}
                    defaultValue={painlevels.find(el => el.value == painData.painlevel)}
                    onChange={value => setPainData(prev => ({ ...prev, painlevel: value.value }))}
                    placeholder="Выбрать из списка"
                />
                <Select
                    styles={customStyles}
                    components={{ DropdownIndicator }}
                    options={painnumlevels}
                    defaultValue={painnumlevels.find(el => el.value == painData.painnumlevel)}
                    onChange={value => setPainData(prev => ({ ...prev, painnumlevel: value.value }))}
                    placeholder="Выберите от 0 до 10"
                />
            </div>
            <svg className="w-4 h-4 shrink-0 cursor-pointer" onClick={e => setPainDatas(prev => [...prev, painData])} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
                <rect width="17" height="17" rx="4" fill="#56326E" />
                <path d="M7.79297 7.7915V3.5415H9.20964V7.7915H13.4596V9.20817H9.20964V13.4582H7.79297V9.20817H3.54297V7.7915H7.79297Z" fill="white" />
            </svg>
        </div>
        <div className="flex gap-6 grow mb-8">
            {[1, 2, 3, 4, 5, 6].map(item => <label key={item} htmlFor={`painlevel-${item}${index > -1 ? `-${index}` : ``}`} className="flex flex-col gap-4 items-center">
                <img src={levels[item - 1]} alt={``} className="w-24 h-auto" />
                <input
                    type="radio"
                    name="painlevel"
                    value={item}
                    checked={painData.level ? item == painData.level : item == 1}
                    onChange={e => e.target.checked && setPainData(prev => ({ ...prev, level: item }))}
                    id={`painlevel-${item}${index > -1 ? `-${index}` : ``}`}
                    className={'border-gray-300 text-purple-900 shadow-sm focus:ring-purple-900 '}
                />
            </label>)}
        </div>
        <div className="mb-8">
            <div className="font-semibold mb-4">Характер боли</div>
            <div className="flex flex-wrap gap-4 items-center">
                {characters.map((item, idx) => <label key={index} htmlFor={`character-${idx}${index > -1 ? `-${index}` : ``}`} className="flex gap-2 items-center">
                    <input
                        type="radio"
                        name="character"
                        value={1 + idx}
                        onChange={e => e.target.checked && setPainData(prev => ({ ...prev, character: 1 + idx }))}
                        checked={painData.character ? idx == painData.character - 1 : idx == 0}
                        id={`character-${idx}${index > -1 ? `-${index}` : ``}`}
                        className={'border-gray-300 text-purple-900 shadow-sm focus:ring-purple-900 '}
                    />
                    <div>{item}</div>
                </label>)}
            </div>
        </div>
        <div className="mb-4">
            <input
                name="text"
                placeholder="Введите текст"
                value={painData.text}
                onChange={e => setPainData(prev => ({ ...prev, text: e.target.value }))}
                className="w-full border-0 rounded"
            />
        </div>
    </div>
}

export default (props) => {

    const {
        data,
        setData,
        errors,
        setTab,
        menu,
        transform
    } = props;

    const [painData, setPainData] = useState({
        level: 1,
        character: 1,
        text: ``
    })

    const [painDatas, setPainDatas] = useState([])

    const canvaRef = useRef(null)

    useEffect(() => {
        if (canvaRef.current && data.pain.lines) {
            setTimeout(() => {
                canvaRef.current.simulateDrawingLines({ lines: data.pain.lines, immediate: true })
            }, 150)
        }
    }, [canvaRef])

    const setPainDataByIndex = prev => {
        console.log({ ...prev })
    }

    // painData => setPainDatas(prev => {
    //     console.log(prev)
    //     const painDatas = [...prev];
    //     painDatas[index] = painData;
    //     return painData;
    // })

    return <>
        <div className={`bg-blue-80 rounded-lg p-5`}>
            <div className="flex gap-4 mb-8">
                <div className="shrink-0">
                    <div className="flex justify-center">
                        <CanvasDraw
                            ref={canvaRef}
                            lazyRadius={6}
                            hideGrid={true}
                            hideInterface={false}
                            brushRadius={3}
                            brushColor="#3A9EAA"
                            canvasWidth={353}
                            canvasHeight={368}
                            imgSrc={Person}
                            onChange={e => setData(prev => {
                                const data = { ...prev }
                                data.ods.lines = e.lines
                                return data
                            })}
                        />
                    </div>
                    <div className="flex justify-center gap-12 py-4 items-center">
                        <button onClick={e => canvaRef.current.undo()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                        </button>
                        <button onClick={e => canvaRef.current.clear()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <PainMetter painData={painData} setPainData={setPainData} setPainDatas={setPainDatas} top={true} />
            </div>
            <ul>
                {painDatas.map((item, index) => <li key={index}>
                    <PainMetter painData={item} setPainData={setPainDataByIndex} index={index} />
                </li>)}
            </ul>
        </div>
        <div className={`flex justify-end py-8`}>
            <PrimaryButton size="sm" onClick={e => setTab(menu.data[3])}>Далее</PrimaryButton>
        </div>
    </>
}
