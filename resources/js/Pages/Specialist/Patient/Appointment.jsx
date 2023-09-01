import Addon from '@/Components/Appointment/Addon';
import Consult from '@/Components/Appointment/Consult';
import Kinesio from '@/Components/Appointment/Kinesio';
import Manual from '@/Components/Appointment/Manual';
import Ods from '@/Components/Appointment/Ods';
import Other from '@/Components/Appointment/Other';
import Painmap from '@/Components/Appointment/Painmap';
import Plan from '@/Components/Appointment/Plan';
import Podiatry from '@/Components/Appointment/Podiatry';
import Taping from '@/Components/Appointment/Taping';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
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
            title: "Доп. исследования",
            code: "addon",
        },
        {
            title: "Подиатрия",
            code: "podiatry",
        },
        {
            title: "План реабилитации",
            code: "plan",
        },
        {
            title: "Кинезотерапия",
            code: "kinesio",
        },
        {
            title: "Тейпирование",
            code: "taping",
        },
        {
            title: "Мануальная терапия",
            code: "manual",
        },
        {
            title: "Другое",
            code: "other",
        },
    ]
}
export default (props) => {

    const { pagetitle } = props

    const [tab, setTab] = useState(menu.data[1])

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
                    {tab.code === `ods` ? <Ods {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `addon` ? <Addon {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `kinesio` ? <Kinesio {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `manual` ? <Manual {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `other` ? <Other {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `painmap` ? <Painmap {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `plan` ? <Plan {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `podiatry` ? <Podiatry {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `taping` ? <Taping {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                    {tab.code === `consult` ? <Consult {...props} setTab={setTab} menu={menu} tab={tab} /> : ``}
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
