import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Calendar from '@/Components/Menu/Calendar';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, useForm } from '@inertiajs/react';
import History from '@/Components/Menu/History';
import Spec from '@/Components/Menu/Spec';
import Finance from '@/Components/Menu/Finance';
import Lens from '@/Components/Lens';
import Bell from '@/Components/Bell';
import Profile from '@/Components/Menu/Profile';
import Patients from '@/Components/Menu/Patients';
import SecondaryButton from '@/Components/SecondaryButton';
import Academic from '@/Components/Academic';
import MapPin from '@/Components/MapPin';
import { useLayout } from '@/Contexts/LayoutContext';
import Notifications from './Notifications';
import Branch from '@/Components/Branch';

export default function Authenticated({ auth, children, heading = false, scrollpage = false }) {

    const [showNotifications, setShowNotifications] = useState(false)
    const { post } = useForm({});

    const { priceFormat } = useLayout()

    const logout = e => {
        e.preventDefault();
        post(route('logout'));
    }

    const roles = {
        client: `Пациент`,
        recieption: `Ресепшн`,
        specialist: `Специалист`,
        admin: `Администратор`,
    }

    const menuItems = {
        admin: [
            {
                title: 'Ресепшн',
                route: `admin.recieptions.index`,
                active: `admin.recieptions`,
                icon: <Calendar className={`w-6 h-auto ml-px`} />
            },
            {
                title: 'Специалисты',
                route: `admin.specialists.index`,
                active: `admin.specialists`,
                icon: <Spec className={`w-4 h-auto`} />
            },
            {
                title: 'Направления',
                route: `admin.directions.index`,
                active: `admin.directions`,
                icon: <Academic className={`w-6 h-auto`} />
            },
            {
                title: 'Нас. пункты',
                route: `admin.localities.index`,
                active: `admin.localities`,
                icon: <MapPin className={`w-6 h-auto`} />
            },
            {
                title: 'Филиалы',
                route: `admin.branches.index`,
                active: `admin.branches`,
                icon: <Branch className={`w-6 h-auto`} />
            },
        ],
        recieption: [
            {
                title: 'Расписание',
                route: `recieption.timetable`,
                params: {
                    branch: 1
                },
                icon: <Calendar className={`w-6 h-auto`} />
            },
            {
                title: 'Пациенты',
                route: `recieption.patients`,
                icon: <Patients className={`w-5 h-auto`} />
            },
            {
                title: 'Специалисты',
                route: `recieption.specialists`,
                icon: <Spec className={`w-4 h-auto`} />
            },
            {
                title: 'Финансы',
                route: `recieption.finance`,
                icon: <Finance className={`w-5 h-auto`} />
            },
        ],
        specialist: [
            {
                title: 'Расписание',
                route: `specialist.timetable`,
                icon: <Calendar className={`w-6 h-auto`} />
            },
            {
                title: 'Пациенты',
                route: `specialist.patients`,
                icon: <Patients className={`w-5 h-auto`} />
            },
            {
                title: 'Специалисты',
                route: `specialist.specialists`,
                icon: <Spec className={`w-4 h-auto`} />
            },
            {
                title: 'Финансы',
                route: `specialist.finance`,
                icon: <Finance className={`w-5 h-auto`} />
            },
        ],
        client: [
            {
                title: 'Расписание',
                route: `client.timetable`,
                icon: <Calendar className={`w-6 h-auto`} />
            },
            {
                title: 'История',
                route: `client.history`,
                icon: <History className={`w-5 h-auto`} />
            },
            {
                title: 'Специалисты',
                route: `client.specialists`,
                icon: <Spec className={`w-4 h-auto`} />
            },
            {
                title: 'Финансы',
                route: `client.finance`,
                icon: <Finance className={`w-5 h-auto`} />
            },
        ]
    }

    return (
        <>
            <div className={`flex space-x-6 container mx-auto h-screen min-h-[30rem]`}>
                <aside className={`w-56 shrink-0 flex flex-col justify-between py-5`}>
                    <div className={`mb-8`}>
                        <div className={`mb-8`}>
                            <Link href="/">
                                <ApplicationLogo className="w-32 h-auto" />
                            </Link>
                        </div>
                        <ul className={``}>
                            {menuItems[auth.user.role.name].map((item, index) => <li key={index}>
                                <Link href={route(item.route, item.params ? item.params : {})} className={`flex space-x-4 items-center my-6 ${(item.active && route().current().indexOf(item.active) > -1) || item.route === route().current() ? `text-violet-500` : `text-gray-800`}`}>
                                    <div className={`w-6 h-6 ${(item.active && route().current().indexOf(item.active) > -1) || item.route === route().current() ? `text-violet-500` : `text-gray-600`} flex items-center justify-center`}>{item.icon}</div>
                                    <span>{item.title}</span>
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                    <div>
                        <Link href={`/profile`} className={`flex space-x-4 items-center mt-6 text-gray-800 pb-6`}>
                            <div className={`w-6 h-6 text-gray-600 flex items-center justify-center`}><Profile className={`w-5 h-auto`} /></div>
                            <span>Профиль</span>
                        </Link>
                        <form onSubmit={logout}>
                            <SecondaryButton type={`submit`}>Выйти</SecondaryButton>
                        </form>
                    </div>
                </aside>
                <div className={`grow pt-2 flex flex-col`}>
                    <header className={`flex items-end justify-between w-full text-gray-800 mb-4`}>
                        <div className={`flex items-end space-x-4`}>
                            <a href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    window.history.back()
                                }}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="8" fill="#FAFBFD" />
                                    <path d="M17.7168 13L10.9997 20L17.7168 27" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <line x1="1" y1="-1" x2="16.7331" y2="-1" transform="matrix(1 0 0 -1 11.2676 19.0312)" stroke="#14142B" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </a>
                            {/* <div className={`relative w-1/2 flex items-center h-10 w-[490px]`}>
                                <Lens className={`w-4 h-auto absolute left-4`} />
                                <input className={`h-10 rounded-lg leading-10 text-sm pl-12 pr-6 w-full`} placeholder={`Поиск пациента`} />
                            </div> */}
                        </div>
                        <div className={`flex flex-col items-end relative`}>
                            {auth.user.role.name !== 'admin' ? <div className={`flex space-x-4 mb-2`}>
                                <span>Баланс</span>
                                <span className={`text-blue-400`}>{priceFormat(auth.user.balance)}</span>
                            </div> : <div className={`flex mb-2`}>&nbsp;</div>}
                            <div className={`flex space-x-4 items-center`}>
                                {auth.user.role.name !== 'admin' ? <a href="#" className={`relative`} onClick={e => {
                                    e.preventDefault();
                                    setShowNotifications(prev => !prev)
                                }}>
                                    <Bell className={`w-6 h-auto`} />
                                    <div className={`w-3 h-3 absolute -right-px -top-1 border-blue-100 rounded-full border-2 bg-green-500`} />
                                </a> : ``}
                                <div className={`w-10 h-10 bg-cover rounded bg-center`} style={{ backgroundImage: `url(/storage/avatar.jpeg)` }}></div>
                                <div className={`leading-tight`}>
                                    <div className={`font-medium`}>{auth.user.name}</div>
                                    <div>{roles[auth.user.role.name]}</div>
                                </div>
                            </div>
                            {showNotifications ? <Notifications /> : ``}
                        </div>
                    </header>
                    <main className={`grow flex flex-col`}>
                        <div className={`shrink-0`}>
                            {heading ? heading : ``}
                        </div>
                        <div className={`grow my-5 relative`}>
                            <div className={`${scrollpage ? `` : `absolute top-0 left-0 bottom-0 right-0 overflow-hidden`} flex flex-col`}>
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            {showNotifications ? <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10`} onClick={e => setShowNotifications(false)}></div> : ``}
        </>
    );
}
