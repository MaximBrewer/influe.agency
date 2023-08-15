import { useLayout } from "@/Contexts/LayoutContext";
import { useForm } from "@inertiajs/react";
import InputError from "../InputError"
import InputLabel from "../InputLabel";
import PrimaryButton from "../PrimaryButton";
import Select from "react-select"
import TextInput from "../TextInput";



const customStyles = {
    control: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return ({
            ...styles,
            minHeight: `2.625rem`,
            borderRadius: `.25rem`,
            outline: `none`,
            borderColor: `transparent`,
            boxShadow: `none`,
            backgroundColor: `#F4F4F4`
        })
    },
    indicatorSeparator: (styles, { data, isDisabled, isFocused, isSelected }) => ({ ...styles, backgroundColor: `transparent` }),
};

export default (props) => {

    const { user, paymethods, role = `recieption` } = props

    const { setModal } = useLayout()

    const { data, setData, post, patch, processing, errors, reset, transform } = useForm({
        user: user.id,
        paymethod: paymethods.length ? paymethods[0] : null,
        sum: ``
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        patch(route(`${role}.patient.topup`, {
            patient: user.id
        }), {
            onSuccess: () => {
                setModal(null)
            }
        });
    }

    return <form onSubmit={submit} className={`min-w-[20rem]`}>
        <h2 className={`font-bold text-xl text-center mb-4`}>{`Пополнение`}</h2>
        <div className="mb-4">
            <InputLabel htmlFor="paymethod" value="Выберите метод оплаты" color={`text-gray-200`} weight={`normal`} />
            <Select
                styles={customStyles}
                defaultValue={data.paymethod}
                name="paymethod"
                options={paymethods}
                placeholder={``}
                onChange={(value) => setData('paymethod', value)}
            // className="basic-multi-select"
            // classNamePrefix="select"
            />
            <InputError message={errors.paymethod} className="mt-2" />
        </div>
        <div className="mb-4">
            <InputLabel htmlFor="sum" value="Введите сумму пополнения" color={`text-gray-200`} weight={`normal`} />
            <TextInput
                id="sum"
                type="number"
                name="sum"
                bg="bg-gray-50"
                placeholder="100000"
                border="border border-gray-50"
                rounded="rounded"
                value={data.sum}
                className="block w-full"
                onChange={handleOnChange}
            />
            <InputError message={errors.sum} className="mt-2" />
        </div>
        <div className={`flex flex-col space-y-3`}>
            <PrimaryButton type={`submit`} className={`justify-center`}>Пополнить</PrimaryButton>
            <div className={`text-center`}>
                <a href={`#`}
                    className={`text-red-500 underline hover:underline-none`}
                    onClick={e => {
                        e.preventDefault();
                        setModal(null)
                    }}>Отменить</a>
            </div>
        </div>
    </form>
}