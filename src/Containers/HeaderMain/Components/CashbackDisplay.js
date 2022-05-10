import React, {useContext} from 'react';
import cls from '../HeaderMain.module.scss'
import {AppContext} from "../../../Context/AppContext/AppContext";

const CashbackDisplay = () => {
    const {user} = useContext(AppContext)

    return (
        <div className={cls.cashback}>
            <div className={cls.percent}>
                {user.cashbackPercent}%
            </div>
            <div className={cls.text}>
                начисление с покупки
            </div>
        </div>
    );
};

export {CashbackDisplay};
