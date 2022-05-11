import React, {useContext} from 'react';
import cls from './AuthPage.module.scss'
import {LayoutContent} from "../../Layouts/LayoutContent";
import {Logo} from "../../Components/BonusCard/Logo";
import {AuthForm} from "./Components/AuthForm";
import {Navigate} from "react-router-dom";
import {useAuthPage} from "./hook/useAuthPage";
import {AuthContext} from "../../Context/AuthContext/AuthContext";

const AuthPage = () => {
    const {underBlock, authFormat} = useAuthPage()
    const {auth} = useContext(AuthContext)

    if (auth) {
        return <Navigate to="/" replace />
    }

    return (
        <div className={cls.authPage}>
            <Logo/>
            <LayoutContent>
                <h2 className={cls.title}>
                    {authFormat ? "Авторизация" : "Регистрация"}
                </h2>
                <AuthForm/>
                <div className={cls.underBlock}>
                    {underBlock()}
                </div>
            </LayoutContent>
        </div>
    );
}

export {AuthPage};
