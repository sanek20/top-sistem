import React, {useState} from 'react';
import {Link} from "react-router-dom";

export const useAuthPage = () => {
    const [authFormat, setAuthFormat] = useState(true);



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
        authFormat, setAuthFormat,
        underBlock
    }
};

