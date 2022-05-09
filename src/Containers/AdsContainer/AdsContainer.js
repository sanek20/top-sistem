import React from 'react';
import {AdsBlock} from "../../Components/AdsBlock";
import cls from './AdsContainer.module.scss'

const AdsContainer = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.adsItem}>
                <AdsBlock/>
            </div>
            <div className={cls.adsItem}>
                <AdsBlock/>
            </div>
        </div>
    );
};

export {AdsContainer};
