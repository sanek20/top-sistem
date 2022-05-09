import React from 'react';
import adsImg from '../../img/adsImg.png'

import cls from './AdsBlock.module.scss'

const AdsBlock = () => {
    return (
        <div className={cls.wrapper}>
            <img src={adsImg} className={cls.img} alt=""/>
            <div className={cls.descrBlock}>
                <div className={cls.title}>
                    Распродажа шин и дисков
                </div>
                <div className={cls.description}>
                    Скидки до 80% в автомобильных магазинах ТРЦ
                </div>
            </div>
        </div>
    );
};

export {AdsBlock};
