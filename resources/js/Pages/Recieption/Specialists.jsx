import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';


export default (props) => {

    const { pagetitle, specialists, week, directions } = props

    const [tab, setTab] = useState(`specialists`)

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            heading={false}
        >
            <Head title={pagetitle} />

            <div className="pb-12 overflow-hidden flex flex-col">
                <ul className={`flex z-1 relative`}>
                    <li className={`relative`}>
                        <a href="#"
                            className={`block rounded-t-lg p-2.5 shadow-bb font-medium text-3xl ${tab === `directions` ? `bg-white` : `bg-blue-50 text-blue-20`}`}
                            onClick={e => {
                                e.preventDefault();
                                setTab(`directions`);
                            }}>Направления</a>
                        <div className={`absolute top-full h-2 left-0 w-full bg-white`}></div>
                    </li>
                    <li className={`relative`}>
                        <a href="#"
                            className={`block rounded-t-lg p-2.5 shadow-bb font-medium text-3xl ${tab === `specialists` ? `bg-white` : `bg-blue-50 text-blue-20`}`}
                            onClick={e => {
                                e.preventDefault();
                                setTab(`specialists`);
                            }}>Специалисты</a>
                        <div className={`absolute top-full h-2 left-0 w-full bg-white`}></div>
                    </li>
                </ul>
                {tab === `directions` ? <div className={`shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto`}>
                    {directions.map((item, ldx) => <div key={ldx} className="flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block">
                        <div className="grow">
                            <div className="font-medium text-violet-500">{item.title}</div>
                        </div>
                        <div className={`flex items-center space-x-4`}>
                            <a href="#" className={`text-violet-500`} onClick={e => {
                                e.preventDefault()
                                setModal(<DirectionModal direction={item} />)
                            }}>
                                <Pencil className={`w-6 h-auto`} />
                            </a>
                            <a href="#" className={`text-red-500`} onClick={e => {
                                e.preventDefault()
                                destroy(item)
                            }}>
                                <Trash className={`w-6 h-auto`} />
                            </a>
                        </div>
                    </div>)}
                </div> : ``}
                {tab === `specialists` ? <div className={`shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto`}>
                    {specialists.map((specialist, sdx) => <div key={sdx} className={`flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block`}>
                        <div className={`shrink-0 w-10 h-10 bg-cover rounded bg-center`} style={{ backgroundImage: `url(/storage/avatar.jpeg)` }}></div>
                        <div className={`grow`}>
                            <div className={`font-medium text-violet-500`}>{specialist.lastname} {specialist.name} {specialist.surname}</div>
                            <ul className={`text-sm flex space-x-3`}>
                                {specialist.directions.map((dir, ddx) => <li key={ddx}>{dir.title}</li>)}
                            </ul>
                        </div>
                        <div>
                            <Link href={route('recieption.specialist.schedule', {
                                specialist: specialist.id
                            })} className={`text-violet-500`}>
                                <PrimaryButton className={`min-w-[150px] justify-center`} size={`sm`}>
                                    <span>Расписание</span>
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>)}
                </div> : ``}
            </div>
        </AuthenticatedLayout>
    );
}
