import React from 'react';
import cls from './ShopListItem.module.scss'
import {Link} from "react-router-dom";

const ShopListItem = ({logo, name, category, cashback}) => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.logo}>
                {logo
                    ? <img src={logo} alt=""/>
                    : <div className={cls.placeholder}>{name[0].toUpperCase()}</div>
                }
            </div>
            <div className={cls.text}>
                <div className={cls.name}>
                    {name}
                </div>
                <div className={cls.category}>
                    {category}
                </div>
            </div>
            <div className={cls.btnGroup}>
                <div>
                    {cashback}%
                </div>
                <Link to="/">
                    <div className={cls.messenger} />
                </Link>
            </div>
        </div>
    );
};

export {ShopListItem};
