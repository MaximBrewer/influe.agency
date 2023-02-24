import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (

        <div className="min-h-screen flex flex-col items-center justify-center">
            <Head title="Log in" />
            <div className={`mb-4`}>
                <Link href="/">
                    <ApplicationLogo className="w-32 h-auto" />
                </Link>
            </div>
            <h1 className={`text-2xl font-bold text-center`}>Добро пожаловать!</h1>
            <p className={`mb-4`}>Для продолжения введите номер телефона и пароль!</p>
            <div className="w-full max-w-md px-6 pb-6 pt-12 bg-white overflow-hidden shadow-[0px_1px_8px_rgba(0,0,0,.1)] rounded-xl">

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <div className={` px-6`}>
                        {/* <InputLabel htmlFor="email" value="Email" /> */}

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            placeholder={`E-mail`}
                            value={data.email}
                            className="mt-1 block w-full text-xl"
                            autoComplete="username"
                            isFocused={true}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-6 px-6">
                        {/* <InputLabel htmlFor="password" value="Password" /> */}

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder={`Пароль`}
                            className="mt-1 block w-full text-xl"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="hidden mt-6">
                        <label className="flex items-center">
                            <Checkbox name="remember" value={data.remember} onChange={handleOnChange} defaultChecked={!0} />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>

                    <div className="mt-6 text-center text-xl">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-blue-500"
                            >
                                Не помню пароль!
                            </Link>
                        )}
                    </div>

                    <div className="mt-6">
                        <PrimaryButton className="w-full justify-center" disabled={processing}>Войти</PrimaryButton>
                    </div>

                    <div className="mt-4 text-center text-xl">
                        <Link
                            href={route('register')}
                            className="underline text-blue-500"
                        >
                            Нет аккаунта
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
