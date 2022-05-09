import React, {useContext, useState} from 'react';
import cls from './ProfileForm.module.scss'
import {useForm} from "react-hook-form";
import {ages} from '../../../../data/data'
import {TiWarning} from 'react-icons/ti'
import {emailReg, phoneReg} from "../../../../data/regexp";
import {AppContext} from "../../../../Context/AppContext/AppContext";
import InputMask from 'react-input-mask';

const ProfileForm = () => {
    const {user, card} = useContext(AppContext)
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        mode: "all"
    })

    const [loading, setLoading] = useState(false)

    const handleForm = async (data) => {
        setLoading(true)
        await console.log(data)
        await setTimeout(() => {
            setLoading(false)
        }, 3000)
        clearTimeout()
    }

    return (
        <div className={cls.wrapper}>
            <div className={cls.title}>
                Информация о профиле
            </div>

            <form
                onSubmit={handleSubmit(handleForm)}
                className={cls.formWrap}
            >
                {/*Card Number*/}
                <div className={cls.formItem}>
                    <label>
                        № карты
                    </label>
                    <input
                        className={cls.input}
                        disabled
                        {...register('cardNumber', {
                            value: card.number
                        })}/>
                </div>
                {/*First Name*/}
                <div className={cls.formItem}>
                    <label>
                        Имя
                    </label>
                    <input
                        className={cls.input}
                        {...register('firstName', {
                            required: true,
                            value: user.name
                        })}
                    />
                    <div className={cls.errMsg}>
                        {errors?.firstName
                        && <span><TiWarning/>{errors?.firstName?.message || "Введите корректное значение"}</span>
                        }
                    </div>
                </div>
                {/*/!*Last Name*!/*/}
                {/*<div className={cls.formItem}>*/}
                {/*    <label>*/}
                {/*        Last Name*/}
                {/*    </label>*/}
                {/*    <input*/}
                {/*        className={cls.input}*/}
                {/*        {...register('lastName', {*/}
                {/*            required: true,*/}
                {/*            value: mockData.lastName*/}
                {/*        })}*/}
                {/*    />*/}
                {/*    <div className={cls.errMsg}>*/}
                {/*        {errors?.lastName*/}
                {/*        && <span><TiWarning/>{errors?.lastName?.message || "Введите корректное значение"}</span>*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*Sex*/}
                {/*...select form*/}
                <div className={cls.formItem}>
                    <label>Sex</label>
                    <select {...register("sex", {
                        value: user.sex
                    })}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                {/*Age*/}
                {/*.. select form*/}
                <div className={cls.formItem}>
                    <label>AGE</label>
                    <select {...register("age", {
                        value: user.age
                    })}>
                        {ages.map((i, idx) => {
                                return (
                                    <option
                                        value={i.value}
                                        key={idx * Math.random()}>
                                        {i.label}
                                    </option>
                                )
                            }
                        )}
                    </select>
                </div>

                {/*E-mail*/}
                <div className={cls.formItem}>
                    <label>
                        Email
                    </label>
                    <input
                        type="email"
                        className={errors?.email && cls.error}
                        {...register('email', {
                            pattern: {
                                value: emailReg(),
                                message: "Введите корректный e-mail"
                            },
                            value: user.email
                        })}
                    />
                    <div className={cls.errMsg}>
                        {errors?.email
                        && <span><TiWarning/>{errors?.email?.message || "Введите корректное значение"}</span>
                        }
                    </div>
                </div>
                {/*Phone*/}
                <div className={cls.formItem}>
                    <label>
                        Phone number
                    </label>
                    <InputMask mask="+7 999 999 99 99"
                               type="tel"
                               className={cls.input}
                               {...register('phone', {
                                   value: user.phone,
                                   minLength: 10,
                                   pattern: {
                                       value: phoneReg(),
                                       message: "Введите телефон в формате +7ХХХХХХХХХХ"
                                   }
                               })}>
                        {(props) => (
                            <input
                                {...props}

                            />
                        )}
                    </InputMask>
                    <div className={cls.errMsg}>
                        {errors?.phone
                        && <span><TiWarning/>{errors?.phone?.message || "Введите корректное значение"}</span>
                        }
                    </div>
                </div>
                <button
                    className={cls.btn}
                    disabled={loading}
                >
                    {!loading ? "Сохранить" : "Загрузка..."}
                </button>

            </form>
        </div>
    );
}

export {ProfileForm};
