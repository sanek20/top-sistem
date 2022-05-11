import React, {useContext, useState} from 'react';
import cls from '../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'
import {useForm} from "react-hook-form";
import {TiWarning} from "react-icons/ti";
import {AuthContext} from "../../../Context/AuthContext/AuthContext";
import {AppContext} from "../../../Context/AppContext/AppContext";

const AuthForm = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({mode: "all"})
    const {setAuth} = useContext(AuthContext)
    const {setStatus} = useContext(AppContext)
    const [loading, setLoading] = useState(false)

    const handleForm = async (data) => {
        setLoading(true)
        if (data.login === 'vip' && data.password === '11111111') {
            setAuth('customer')
            setStatus('vip')
        } else if (data.login === 'manager' && data.password === '11111111') {
            setAuth('manager')
            setStatus('manager')
        }

    }

    return (
        <form onSubmit={handleSubmit(handleForm)}>
            <div className={cls.formItem}>
                <label>
                    Логин или e-mail
                </label>
                <input placeholder="Логин или e-mail" {...register('login', {
                    required: "Введите верный логин",
                    minLength: {value: 3, message: "Минимум 3 символа"},
                })}/>
                <div className={cls.errMsg}>
                    {errors?.login
                        && <span><TiWarning/>{errors?.phone?.message || "Введите корректное значение"}</span>
                    }
                </div>
            </div>
            <div className={cls.formItem}>
                <label>
                    Пароль
                </label>
                <input type="password" placeholder="Пароль" {...register('password', {
                    required: "Введите пароль",
                    minLength: {value: 8, message: "Минимум 8 символа"},
                })}/>
                <div className={cls.errMsg}>
                    {errors?.password
                        && <span><TiWarning/>{errors?.phone?.message || "Введите корректное значение"}</span>
                    }
                </div>
            </div>
            <button
                className={cls.btn}
                disabled={loading}
            >
                {!loading ? "Войти" : "Загрузка..."}
            </button>
        </form>
    );
}

export {AuthForm};
