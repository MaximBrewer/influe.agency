import Pencil from '@/Components/Pencil';
import Plus from '@/Components/Plus';
import PrimaryButton from '@/Components/PrimaryButton';
import Trash from '@/Components/Trash';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';


export default (props) => {

    const { pagetitle, seniors } = props

    const { data, post } = useForm({
        _method: `delete`
    });

    const destroy = (senior) => {
        post(route('admin.seniors.destroy', {
            senior: senior.id
        }))
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            heading={<h1 className="font-semibold text-3xl text-gray-800 leading-tight">{pagetitle}</h1>}
        >
            <Head title={pagetitle} />

            <div className="pb-12 overflow-hidden flex flex-col">
                <Link href={route('admin.seniors.create')}>
                    <PrimaryButton className={`mb-4`}>
                        <span>Добавить</span>
                        <Plus className={`w-6 h-auto ml-3`} />
                    </PrimaryButton>
                </Link>
                <div className={`shadow-bb rounded-lg bg-white px-6 overflow-y-auto pt-5`}>
                    {seniors.map((senior, sdx) => <div key={sdx} className="flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block">
                        <div className={`shrink-0 w-10 h-10 bg-cover rounded bg-center`} style={{ backgroundImage: `url(/storage/avatar.jpeg)` }}></div>
                        <div className={`grow`}>
                            <div className={`font-medium text-violet-500`}>{senior.lastname} {senior.name} {senior.surname}</div>
                        </div>
                        <div className={`flex items-center space-x-4`}>
                            <Link href={route('admin.seniors.edit', {
                                senior: senior.id
                            })} className={`text-violet-500`}>
                                <Pencil className={`w-6 h-auto`} />
                            </Link>
                            <a href="#" className={`text-red-500`} onClick={e => {
                                e.preventDefault()
                                destroy(senior)
                            }}>
                                <Trash className={`w-6 h-auto`} />
                            </a>
                        </div>
                    </div>)}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
