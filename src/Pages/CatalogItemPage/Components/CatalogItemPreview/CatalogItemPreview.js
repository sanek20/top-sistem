import React from 'react';
import cls from './CatalogItemPreview.module.scss'
import {ChoiceButton} from "../../../../Components/UI/ChoiseButton";

const CatalogItemPreview = ({logo, name, description, chosen}) => {

    return (
        <div className={cls.wrapper}>
            <div className={cls.topRow}>
                <div className={cls.logo}>
                    <img src={logo} alt=""/>
                </div>
                <div className={cls.name}>
                    {name}
                </div>
                <div className={cls.btn}>
                    <ChoiceButton state={chosen}/>
                </div>
            </div>
            <div className={cls.descr}>
                {description}
            </div>
        </div>
    );
}

export {CatalogItemPreview};
