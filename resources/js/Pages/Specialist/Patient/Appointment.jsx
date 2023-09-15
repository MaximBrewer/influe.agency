import Addon from '@/Components/Appointment/Addon';
import Consult from '@/Components/Appointment/Consult';
import Kinesio from '@/Components/Appointment/Kinesio';
import Manual from '@/Components/Appointment/Manual';
import Oda from '@/Components/Appointment/Oda';
import Ods from '@/Components/Appointment/Ods';
import Other from '@/Components/Appointment/Other';
import Painmap from '@/Components/Appointment/Painmap';
import Plan from '@/Components/Appointment/Plan';
import Podiatry from '@/Components/Appointment/Podiatry';
import Taping from '@/Components/Appointment/Taping';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const menu = {
    data: [
        {
            title: "Консультация",
            code: "consult",
        },
        {
            title: "ОДС",
            code: "ods",
        },
        {
            title: "Карта боли",
            code: "painmap",
        },
        {
            title: "Кинезотерапия",
            code: "kinesio",
        },
        {
            title: "ОДА",
            code: "oda",
        },
        // {
        //     title: "Доп. исследования",
        //     code: "addon",
        // },
        // {
        //     title: "Подиатрия",
        //     code: "podiatry",
        // },
        // {
        //     title: "План реабилитации",
        //     code: "plan",
        // },
        // {
        //     title: "Тейпирование",
        //     code: "taping",
        // },
        {
            title: "Другое",
            code: "other",
        },
    ]
}

export default (props) => {

    const { pagetitle, appointment } = props

    const formRef = useRef(null)

    const [tab, setTab] = useState(menu.data[3])
    const tabRef = useRef(tab.code)


    const { data, setData, post, processing, errors, reset, transform } = useForm({
        ...appointment.data,
        ods: appointment.data.ods ?? {},
        painmap: appointment.data.painmap ?? {}
    });

    const dataRef = useRef(data)

    transform(() => {
        return ({
            ...dataRef.current,
            tab: tab.code
        })
    })

    const submit = (e) => {
        e && e.preventDefault()
        post(route('specialist.appointment.update', {
            book: appointment.data.book_id
        }), {
            preserveScroll: true,
            preserveState: true
        });
    };

    useEffect(() => {
        tab.code == tabRef.current || submit()
        tabRef.current = tab.code
    }, [tab])

    useEffect(() => {
        console.log(data)
        dataRef.current = data
    }, [data])

    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => submit(), 5000)
        return () => clearInterval(intervalRef.current)
    }, [])

    const nextTab = () => {
        setTab(prev => {
            let index = menu.data.findIndex(el => el.code == prev.code)
            if (index == length - 1) return prev
            return menu.data[index + 1]
        })
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            scrollpage={true}
            heading={<h1 className="font-semibold text-3xl text-gray-800 leading-tight">{pagetitle}</h1>}
        >
            <Head title={pagetitle} />

            <div className="flex flex-col mb-12">
                <ul className={`flex z-1 relative text-center items-strech leading-none`}>
                    {menu.data.map((it, idx) => <li key={idx} className={`relative flex ${it.code === tab.code ? `z-10` : ``}`}>
                        <a href="#" onClick={e => {
                            e.preventDefault()
                            setTab(it)
                        }} className={`flex items-center rounded-t-lg px-2 py-1 shadow-bb font-medium ${it.code === tab.code ? `bg-white` : `bg-blue-50 text-blue-20`}`}>{it.title}</a>
                        <div className="absolute top-full h-2 left-0 w-full bg-white"></div>
                    </li>)}
                </ul>
                <div className={`shadow-bb rounded-lg bg-white py-5 px-6`}>
                    <form onSubmit={submit} ref={formRef}>
                        {tab.code === `consult` ? <Consult
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                        {tab.code === `ods` ? <Ods
                            data={data}
                            setData={setData}
                            transform={transform}
                            errors={errors}
                        /> : ``}
                        {tab.code === `painmap` ? <Painmap
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                        {tab.code === `addon` ? <Addon
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                        {tab.code === `kinesio` ? <Kinesio
                            data={data}
                            setData={setData}
                            transform={transform}
                            errors={errors}
                            nextTab={nextTab}
                        /> : ``}
                        {tab.code === `manual` ? <Manual
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                        {tab.code === `other` ? <Other
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                        {tab.code === `plan` ? <Plan
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                        {tab.code === `oda` ? <Oda
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                        {tab.code === `podiatry` ? <Podiatry
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                        {tab.code === `taping` ? <Taping
                            data={data}
                            setData={setData}
                            errors={errors}
                        /> : ``}
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
