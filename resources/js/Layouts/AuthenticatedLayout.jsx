import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Calendar from '@/Components/Menu/Calendar';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import History from '@/Components/Menu/History';
import Spec from '@/Components/Menu/Spec';
import Finance from '@/Components/Menu/Finance';
import Lens from '@/Components/Lens';
import Bell from '@/Components/Bell';
import Profile from '@/Components/Menu/Profile';

export default function Authenticated({ auth, children, heading = false }) {

    const menuItems = [
        {
            url: '/',
            title: 'Расписание',
            icon: <Calendar className={`w-6 h-auto`} />
        },
        {
            url: '/',
            title: 'История',
            icon: <History className={`w-5 h-auto`} />
        },
        {
            url: '/',
            title: 'Специалисты',
            icon: <Spec className={`w-4 h-auto`} />
        },
        {
            url: '/',
            title: 'Финансы',
            icon: <Finance className={`w-5 h-auto`} />
        },
    ]

    console.log(auth)
    return (
        <div className={`flex space-x-6 container mx-auto px-10 py-5`}>
            <aside className={`w-64 shrink-0 flex flex-col justify-between`}>
                <div className={`mb-8`}>
                    <div className={`mb-8`}>
                        <Link href="/">
                            <ApplicationLogo className="w-32 h-auto" />
                        </Link>
                    </div>
                    <ul className={``}>
                        {menuItems.map((item, index) => <li key={index}>
                            <Link href={item.url} className={`flex space-x-4 items-center my-6 text-gray-800`}>
                                <div className={`w-6 h-6 text-gray-600 flex items-center justify-center`}>{item.icon}</div>
                                <span>{item.title}</span>
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <Link href={`/profile`} className={`flex space-x-4 items-center my-6 text-gray-800`}>
                    <div className={`w-6 h-6 text-gray-600 flex items-center justify-center`}><Profile className={`w-5 h-auto`} /></div>
                    <span>Профиль</span>
                </Link>
            </aside>
            <div className={`grow pt-2`}>
                <header className={`flex items-end justify-between w-full text-gray-800 mb-6`}>
                    <div className={`relative w-1/2 flex items-center h-10`}>
                        <Lens className={`w-4 h-auto absolute left-4`} />
                        <input className={`h-10 rounded-lg leading-10 text-sm pl-12 pr-6 w-full`} placeholder={`Поиск пациента`} />
                    </div>
                    <div className={`flex flex-col items-end`}>
                        <div className={`flex space-x-4 mb-2`}>
                            <span>Баланс</span>
                            <span className={`text-blue-400`}>20 000 KZT</span>
                        </div>
                        <div className={`flex space-x-4`}>
                            <Bell className={`w-6 h-auto`} />
                            <div className={`w-10 h-10 bg-cover rounded bg-center`} style={{ backgroundImage: `url(/storage/avatar.jpeg)` }}></div>
                            <div className={`leading-tight`}>
                                <div className={`font-medium`}>{auth.user.name}</div>
                                <div>Пациент</div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    {heading ? heading : ``}
                    {children}
                </main>
            </div>
        </div >
    );
}
