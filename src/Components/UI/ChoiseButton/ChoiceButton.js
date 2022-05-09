import React from 'react';
import {IoCheckmarkDoneOutline} from "react-icons/io5";
import cls from '../../../Pages/CatalogPage/Components/CatalogListItem/CatalogListItem.module.scss'


const ChoiceButton = ({state}) => {
    return (
        <button className={!state ? cls.choice : cls.choice + ' ' + cls.chosen}>
            {!state ? "Выбрать" : <span>Выбран {<IoCheckmarkDoneOutline/>}</span>}
        </button>
    );
};

export {ChoiceButton};
