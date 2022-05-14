import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext/AuthContext";

export const useAuthPage = () => {
    const [authFormat, setAuthFormat] = useState(true);
    const {signInState} = useContext(AuthContext)

    const signInHandler = (data) => {
        const login = data.login
        const password = data.password

        if (!!authFormat) {
            signInState(login, password)
        }
    }

    const underBlock = () => {
        if (authFormat) {
            return (
                <>
                    <Link to="/">Забыли пароль</Link> или <button
                    onClick={() => setAuthFormat(false)}>зарегистрироваться</button>
                </>
            )
        } else {
            return (
                <>
                    Уже есть аккаунт? <button onClick={() => setAuthFormat(true)}>Войти</button>
                </>
            )
        }
    }

    return {
        authFormat, setAuthFormat, signInHandler,
        underBlock
    }
};

