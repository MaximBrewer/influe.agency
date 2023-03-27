import Pencil from '@/Components/Pencil';
import PrimaryButton from '@/Components/PrimaryButton';
import Plus from '@/Components/Plus';
import BranchModal from '@/Components/Modals/Branch';
import InfoModal from '@/Components/Modals/Info';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useLayout } from '@/Contexts/LayoutContext';
import SecondaryButton from '@/Components/SecondaryButton';
import Trash from '@/Components/Trash';
import { useEffect } from 'react';


export default (props) => {

    const { pagetitle, branches, errors = {}, localities } = props

    console.log(localities)

    const { setModal } = useLayout();

    const { data, post } = useForm({
        _method: `delete`
    });

    const destroy = (branch) => {
        post(route('admin.branches.destroy', {
            branch: branch.id
        }))
    }

    useEffect(() => {
        if (errors && errors.message) {
            setModal(<InfoModal message={errors.message} status={`error`} />)
        }
    }, [errors])

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            heading={<h1 className="font-semibold text-3xl text-gray-800 leading-tight">{pagetitle}</h1>}
        >
            <Head title={pagetitle} />

            <div className="pb-12 overflow-hidden flex flex-col">
                <div className={`flex`}>
                    <PrimaryButton className={`mb-4`} onClick={e => setModal(<BranchModal localities={localities} />)}>
                        <span>Добавить</span>
                        <Plus className={`w-6 h-auto ml-3`} />
                    </PrimaryButton>
                </div>
                <div className={`rounded-lg shadow-block bg-white px-3 py-4 overflow-y-auto`}>
                    {branches.map((item, ldx) => <div key={ldx} className="flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block">
                        <div className="grow">
                            <div className="font-medium text-violet-500">{item.title}</div>
                        </div>
                        <div className={`flex items-center space-x-4`}>
                            <a href="#" className={`text-violet-500`} onClick={e => {
                                e.preventDefault()
                                setModal(<BranchModal branch={item} localities={localities} />)
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
