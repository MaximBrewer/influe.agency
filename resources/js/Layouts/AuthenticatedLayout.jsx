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
import Phone from '@/Components/Phone';
import Clock from '@/Components/Clock';
import CalendarIcon from '@/Components/Calendar';
import LinkIcon from '@/Components/Link';
import Patients from '@/Components/Menu/Patients';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Authenticated({ auth, children, heading = false }) {

    const [showNotifications, setShowNotifications] = useState(false)
    const { post } = useForm({});

    const logout = e => {
        e.preventDefault();
        post(route('logout'));
    }

    const roles = {
        client: `Пациент`,
        recieption: `Ресепшн`,
        masseur: `Массажист`,
        specialist: `Специалист`,
        admin: `Администратор`,
    }

    const menuItems = {
        admin: [
            {
                title: 'Расписание',
                route: `admin.timetable`,
                icon: <Calendar className={`w-6 h-auto`} />
            },
            {
                title: 'Пациенты',
                route: `admin.patients`,
                icon: <Patients className={`w-5 h-auto`} />
            },
            {
                title: 'Специалисты',
                route: `admin.specialists`,
                icon: <Spec className={`w-4 h-auto`} />
            },
            {
                title: 'Финансы',
                route: `admin.finance`,
                icon: <Finance className={`w-5 h-auto`} />
            },
        ],
        recieption: [
            {
                title: 'Расписание',
                route: `recieption.timetable`,
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
        masseur: [
            {
                title: 'Расписание',
                route: `masseur.timetable`,
                icon: <Calendar className={`w-6 h-auto`} />
            },
            {
                title: 'Пациенты',
                route: `masseur.patients`,
                icon: <Patients className={`w-5 h-auto`} />
            },
            {
                title: 'Специалисты',
                route: `masseur.specialists`,
                icon: <Spec className={`w-4 h-auto`} />
            },
            {
                title: 'Финансы',
                route: `masseur.finance`,
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
            <div className={`flex space-x-6 container mx-auto py-5`}>
                <aside className={`w-56 shrink-0 flex flex-col justify-between h-[calc(100vh-40px)]`}>
                    <div className={`mb-8`}>
                        <div className={`mb-8`}>
                            <Link href="/">
                                <ApplicationLogo className="w-32 h-auto" />
                            </Link>
                        </div>
                        <ul className={``}>
                            {menuItems[auth.user.role].map((item, index) => <li key={index}>
                                <Link href={route(item.route)} className={`flex space-x-4 items-center my-6 ${item.route === route().current() ? `text-violet-500` : `text-gray-800`}`}>
                                    <div className={`w-6 h-6 ${item.route === route().current() ? `text-violet-500` : `text-gray-600`} flex items-center justify-center`}>{item.icon}</div>
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
                <div className={`grow pt-2`}>
                    <header className={`flex items-end justify-between w-full text-gray-800 mb-6`}>
                        <div className={`flex items-end space-x-4`}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="8" fill="#FAFBFD" />
                                <path d="M17.7168 13L10.9997 20L17.7168 27" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="1" y1="-1" x2="16.7331" y2="-1" transform="matrix(1 0 0 -1 11.2676 19.0312)" stroke="#14142B" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <div className={`relative w-1/2 flex items-center h-10 w-[490px]`}>
                                <Lens className={`w-4 h-auto absolute left-4`} />
                                <input className={`h-10 rounded-lg leading-10 text-sm pl-12 pr-6 w-full`} placeholder={`Поиск пациента`} />
                            </div>
                        </div>
                        <div className={`flex flex-col items-end relative`}>
                            <div className={`flex space-x-4 mb-2`}>
                                <span>Баланс</span>
                                <span className={`text-blue-400`}>20 000 KZT</span>
                            </div>
                            <div className={`flex space-x-4 items-center`}>
                                <a href="#" className={`relative`} onClick={e => {
                                    e.preventDefault();
                                    setShowNotifications(prev => !prev)
                                }}>
                                    <Bell className={`w-6 h-auto`} />
                                    <div className={`w-3 h-3 absolute -right-px -top-1 border-blue-100 rounded-full border-2 bg-green-500`} />
                                </a>
                                <div className={`w-10 h-10 bg-cover rounded bg-center`} style={{ backgroundImage: `url(/storage/avatar.jpeg)` }}></div>
                                <div className={`leading-tight`}>
                                    <div className={`font-medium`}>{auth.user.name}</div>
                                    <div>{roles[auth.user.role]}</div>
                                </div>
                            </div>
                            {showNotifications ? <div className={`absolute top-full left-0 z-20 ml-[90px] -translate-x-full w-[374px] -mt-4`} onClick={e => e.stopPropagation()}>
                                <div className="h-8 w-8 origin-bottom-left rotate-45 transform border border-white bg-white ml-[274px]"></div>
                                <div className={`bg-white rounded-xl bg-white py-6 px-6 z-1 relative`}>
                                    <div className={`text-lg font-semibold mb-5`}>Следующий прием</div>
                                    <div className={`flex space-x-5 items-center mb-5`}>
                                        <div className={`shrink-0 w-10 h-10 bg-cover rounded bg-center`} style={{ backgroundImage: `url(/storage/avatar.jpeg)` }}></div>
                                        <div className={`grow`}>
                                            <div className={`text-sm text-violet-500`}>Имя Фамилия Специалиста</div>
                                            <div className={`font-medium`}>Назначение приема</div>
                                        </div>
                                        <div className={`shrink-0 bg-blue-100 flex items-center justify-center rounded-full w-10 h-10`}>
                                            <Phone className={`w-6 h-6 text-gray-600`} />
                                        </div>
                                    </div>
                                    <hr className={`border-dashed border-blue-200 my-5`} />
                                    <div className={`flex font-medium items-center space-x-2 mb-5`}>
                                        <div className={`flex items-center`}>
                                            <Clock className={`w-4 h-auto mr-1`} />
                                            <span>9:30</span>
                                        </div>
                                        <div className={`flex items-center`}>
                                            <CalendarIcon className={`w-5 h-auto mr-1`} />
                                            <span>31.05.2022</span>
                                        </div>
                                    </div>

                                    <div className={`text-lg font-semibold mb-4`}>Магазин</div>
                                    <div className={`flex items-center text-sm mb-1`}>
                                        <LinkIcon className={`w-4 h-auto mr-1`} />
                                        <span className={`text-violet-500`}>Имя Фамилия продавца</span>
                                    </div>
                                    <div className={`font-medium mb-4`}>Сообщение о готовности стелек/обуви</div>
                                    <div className={`flex justify-between text-violet-500 text-sm`}>
                                        <div className={`bg-blue-100 rounded-lg px-2`}>Подробнее</div>
                                        <div className={`bg-blue-100 rounded-lg px-2`}>Телефон пациента</div>
                                        <div className={`bg-blue-100 rounded-lg px-2`}>История</div>
                                    </div>

                                    <div className={`text-lg font-semibold mb-4`}>Магазин</div>
                                    <div className={`flex items-center text-sm mb-1`}>
                                        <LinkIcon className={`w-4 h-auto mr-1`} />
                                        <span className={`text-violet-500`}>Имя Фамилия продавца</span>
                                    </div>
                                    <div className={`font-medium mb-4`}>Сообщение о готовности стелек/обуви</div>
                                    <div className={`flex justify-between text-violet-500 text-sm`}>
                                        <div className={`bg-blue-100 rounded-lg px-2`}>Подробнее</div>
                                        <div className={`bg-blue-100 rounded-lg px-2`}>Телефон пациента</div>
                                        <div className={`bg-blue-100 rounded-lg px-2`}>История</div>
                                    </div>

                                    <div className={`text-lg font-semibold mb-4`}>Ресепшн</div>
                                    <div className={`flex items-center text-sm mb-1`}>
                                        <LinkIcon className={`w-4 h-auto mr-1`} />
                                        <span className={`text-violet-500`}>Имя Фамилия специалиста</span>
                                    </div>
                                    <div className={`font-medium mb-4`}>Имя Фамилия специалиста</div>
                                    <div className={`flex justify-between text-violet-500 text-sm`}>
                                        <div className={`bg-blue-100 rounded-lg px-2`}>Подробнее</div>
                                        <div className={`bg-blue-100 rounded-lg px-2`}>Расписание</div>
                                    </div>
                                </div>
                            </div> : ``}
                        </div>
                    </header>
                    <main>
                        {heading ? heading : ``}
                        {children}
                    </main>
                </div>
            </div>
            {showNotifications ? <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10`} onClick={e => setShowNotifications(false)}></div> : ``}
        </>
    );
}
