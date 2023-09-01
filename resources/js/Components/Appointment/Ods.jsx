import LensPlus from "@/Icons/LensPlus";
import Redactor from "@/Icons/LensPlus";

import Person from "../../../img/person.svg"
import Canvas from "@/Redactor/Canvas";
import CanvasDraw from "react-canvas-draw";
import { useEffect, useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";

const tableClassses = {
    grid: `grid grid-cols-[18fr_10fr_9fr_12fr]`
}

const Th = ({ children, className = "", ...props }) => {
    return <div className={`px-5 py-2 border-l first:border-l-0 border-zinc-500 text-left ${className}`} {...props}>{children}</div>
}

const Td = ({ children, className = "", ...props }) => {
    return <div className={`px-2 py-0.5 min-h-[2.5rem] flex items-center border-r border-b first:border-l border-zinc-500 ${className}`} {...props}>
        <div className="w-full">{children}</div>
    </div>
}

const Heading = ({ children, toggleOpen, opened, className = "" }) => {
    return <div className={`${tableClassses.grid} px-5 py-2 bg-slate-100 border-b border-r border-l border-zinc-500 ${className}`} onClick={e => toggleOpen(prev => !prev)}>
        <div className="col-span-4">
            <div className="flex items-center cursor-pointer">
                <span className="grow font-semibold">{children}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-2.5 shrink-0 text-gray-700 transition ${opened ? `rotate-180` : ``}`} viewBox="0 0 16 10" fill="none">
                    <path d="M7.071 5.65735L12.728 0.000351349L14.142 1.41435L7.071 8.48535L-3.09083e-07 1.41435L1.414 0.000351844L7.071 5.65735Z" fill="currentColor" />
                </svg>
            </div>
        </div>
    </div>
}

export default (props) => {

    const { setTab, appointment, menu } = props;

    const canvaRef = useRef(null)

    const [common, setCommon] = useState(false)
    const [tonus, setTonus] = useState(false)
    const [chest, setChest] = useState(false)
    const [tests, setTests] = useState(false)
    const [notes, setNotes] = useState(false)

    const formRef = useRef(null)
    const dataRef = useRef({})

    const { data, setData, post, patch, processing, errors, reset, transform } = useForm({
        ...appointment.data
    });

    const submit = (e) => {
        e.preventDefault()
        post(route('specialist.appointment.update', {
            book: appointment.data.book_id
        }), {
            body: dataRef.current,
            onSuccess: () => {
                setTab(menu.data[1]);
            },
            onError: () => {
                setTab(menu.data[0]);
            }
        });
    };

    const handleOnChange = (event) => {
        setData(prev => {
            let data = { ...prev };
            data[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value
            return data;
        });
    };

    useEffect(() => {
        setData(prev => ({
            ...prev,
            current: `consult`
        }))
        return () => {
        }
    }, [])

    useEffect(() => {
        dataRef.current = data
    }, [data])

    useEffect(() => {
        () => {
            formRef.current && formRef.current.submit()
        }
    }, [formRef])

    return <form onSubmit={submit} ref={formRef}>
        <div className={`bg-white rounded-lg pt-8`}>
            <div>
                <div className="flex justify-center">
                    {/* <Canvas bg={Person} width={303} height={463} /> */}
                    <CanvasDraw
                        ref={canvaRef}
                        lazyRadius={10}
                        hideGrid={true}
                        hideInterface={false}
                        // enablePanAndZoom={true}
                        brushRadius={3}
                        brushColor="#3A9EAA"
                        canvasWidth={303}
                        canvasHeight={463}
                        imgSrc={Person}
                        onChange={(e) => {
                            console.log(e)
                        }}
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
            <div className={`${tableClassses.grid} bg-purple-900 text-white font-bold rounded-t-lg border border-purple-900 overflow-hidden`}>
                <Th>Признаки нарушения осанки</Th>
                <Th>Наличие признака</Th>
                <Th>Динамика</Th>
                <Th>Примечание</Th>
            </div>
            <Heading toggleOpen={setCommon} opened={common}>Общие признаки</Heading>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Осанка</Td>
                <Td>Вялая</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Голова</Td>
                <Td>Наклон вправо</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Асимметрия стояния надплечий</Td>
                <Td>Правое ниже</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Асимметрия состояний лопаток</Td>
                <Td>Правое ниже</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Крыловидные лопатки</Td>
                <Td>Да</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Усиленный шейный лордоз</Td>
                <Td>Да</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Сглажение шейного лордоза</Td>
                <Td>Да</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Усиление грудного кифоза</Td>
                <Td>Да</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Сглажение грудного кифоза</Td>
                <Td>Да</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Сглажение поясничного лордоза</Td>
                <Td>Да</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Усиление поясничного лордоза</Td>
                <Td>Да</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Асимметрия треугольников талии</Td>
                <Td>Справа больше</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Асимметричные мышечные валики на спине</Td>
                <Td>Справа больше</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Реберный горб на спине</Td>
                <Td>Справа</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Отклонение оси позвоночника от прямой линии</Td>
                <Td>В грудном вправо, В пояснисном вправо</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Асимметрия корпуса</Td>
                <Td>Вправо</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Перекос таза</Td>
                <Td>Вправо</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Крестцовые ямки</Td>
                <Td>Вправо</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Перекос таза сидя</Td>
                <Td>Вправо</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Разворот таза по оси</Td>
                <Td>Разворот по оси против часовой стрелки</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Разворот корпуса по оси</Td>
                <Td>Разворот по оси против часовой стрелки</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Асимметрия ягодичных складок</Td>
                <Td>Справа ниже</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${common ? `max-h-none` : `max-h-0`}`}>
                <Td>Асимметрия подколенных складок</Td>
                <Td>Справа ниже</Td>
                <Td></Td>
                <Td></Td>
            </div>
            <Heading toggleOpen={setTonus} opened={tonus}>Состояние мышечного тонуса</Heading>
            <div className={`${tableClassses.grid} transition overflow-hidden ${tonus ? `max-h-none` : `max-h-0`}`}>
                <Td>Осанка</Td>
                <Td>Осанка</Td>
                <Td>Осанка</Td>
                <Td>Осанка</Td>
            </div>
            <Heading toggleOpen={setChest} opened={chest}>Со стороны груди</Heading>
            <div className={`${tableClassses.grid} transition overflow-hidden ${chest ? `max-h-none` : `max-h-0`}`}>
                <Td>Осанка</Td>
                <Td>Осанка</Td>
                <Td>Осанка</Td>
                <Td>Осанка</Td>
            </div>
            <Heading toggleOpen={setTests} opened={tests}>Тесты</Heading>
            <div className={`${tableClassses.grid} transition overflow-hidden ${tests ? `max-h-none` : `max-h-0`}`}>
                <Td>Флексионный</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${tests ? `max-h-none` : `max-h-0`}`}>
                <Td>Экстензионный</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${tests ? `max-h-none` : `max-h-0`}`}>
                <Td>Тест Адамса</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${tests ? `max-h-none` : `max-h-0`}`}>
                <Td>Тест Дерболовского (анатом.укороч.)</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </div>
            <div className={`${tableClassses.grid} transition overflow-hidden ${tests ? `max-h-none` : `max-h-0`}`}>
                <Td>Тест Тределенбурга</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </div>
            <Heading toggleOpen={setNotes} opened={notes} className={`${notes ? `` : `rounded-b-lg`}`}>Примечания</Heading>
            <div className={`${tableClassses.grid} transition overflow-hidden ${notes ? `max-h-none` : `max-h-0`}`}>
                <div className="col-span-4 rounded-b-lg border-zinc-500 border-l border-r border-b">
                    <textarea placeholder="Введите текст" className="w-full min-h-[16rem] border-0 block rounded-b-lg">

                    </textarea>
                </div>
            </div>
        </div>
        <div className={`flex justify-end py-8`}>
            <PrimaryButton size="sm" type="submit">Далее</PrimaryButton>
        </div>
    </form>
}
