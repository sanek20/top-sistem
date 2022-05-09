import React from 'react';
import cls from './ShopsList.module.scss'
import {ShopListItem} from "./Components/ShopsListItem/ShopListItem";
import {shops} from "../../data/data";

const ShopsList = () => {
    return (
        <div className={cls.wrapper}>
            <h2>Магазины</h2>
            {shops.map(item => (
                <ShopListItem {...item} key={'shop' + item.id} />
            ))}

        </div>
    );
};

export {ShopsList};
