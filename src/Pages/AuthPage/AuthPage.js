import React, {useContext, useEffect} from 'react';
import cls from './AuthPage.module.scss'
import {LayoutContent} from "../../Layouts/LayoutContent";
import {Logo} from "../../Components/BonusCard/Logo";
import {AuthForm} from "./Components/AuthForm";
import {Navigate} from "react-router-dom";
import {useAuthPage} from "./hook/useAuthPage";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import {Loader} from "../../Components/UI/Loader";

const AuthPage = () => {
    const {underBlock, authFormat} = useAuthPage()
    const {auth, loading, error} = useContext(AuthContext)

    if (auth) {
        return <Navigate to="/" replace/>
    }

    return (
        <div className={cls.authPage}>
            {loading && <Loader/>}
            <Logo/>
            <LayoutContent>
                <h2 className={cls.title}>
                    {authFormat ? "Авторизация" : "Регистрация"}
                </h2>
                <AuthForm/>
                {error &&
                    <div className={cls.errorMsg}>
                        {authFormat
                            ? "Неправильный логин или пароль"
                            : "Пользователь уже зарегистрирован"
                        }
                    </div>
                }
                <div className={cls.underBlock}>
                    {underBlock()}
                </div>
            </LayoutContent>
        </div>
    );
}

export {AuthPage};
