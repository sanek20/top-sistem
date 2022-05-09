import React from 'react';
import cls from './CatalogListItem.module.scss'
import {Link} from "react-router-dom";
import {gradients} from "../../../../data/data";
import {randomInteger} from "../../../../utils/randomInteger";
import logoPlaceholder from '../../../../img/trc.png'
import {IoCheckmarkDoneOutline} from 'react-icons/io5'
import {ChoiceButton} from "../../../../Components/UI/ChoiseButton";

const CatalogListItem = (props) => {
    const {logo, chosen, name, address, id} = props
    const gradient = () => {
        return gradients[randomInteger(0, gradients.length - 1)].toString()
    }

    return (
        <div
            className={cls.wrapper}
            style={{background: gradient()}}
        >
            <div className={cls.topRow}>
                <div className={cls.logo}>
                    <img src={logo || logoPlaceholder} alt="logo"/>
                </div>
                <div className={cls.titles}>
                    <div className={cls.name}>
                        {name || "Торговый центр"}
                    </div>
                    <div className={cls.address}>
                        {address || " "}
                    </div>
                </div>
            </div>
            <ChoiceButton state={chosen}/>
            <Link to={`/catalog/${id}`} className={cls.more}>
                Подробнее
            </Link>
        </div>
    );
}

export {CatalogListItem};
