import React, {useContext} from "react";

import cls from './BonusCard.module.scss'
import img from '../../img/trc.png'
import {Link} from "react-router-dom";
import {AppContext} from "../../Context/AppContext/AppContext";
import {cardFormatter} from "../../utils/cardFormatter";
import {levelCardColor} from "../../data/data";

const BonusCard = () => {
    const { card } = useContext(AppContext)

    return (
        <div className={cls.wrapper}>
            <div className={cls.topRow}>
                <Link to="/catalog" className={cls.tcSelect}>
                    <div className={cls.tcSelectImg}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={cls.tcText}>Выбрать ТЦ</div>
                </Link>
                <div className={cls.topRowRight}>
                    <div className={cls.cardNumber}>
                        {cardFormatter(card.number)}
                    </div>
                    <div className={cls.nextCard}>
                        до платиновой карты <span>1 647</span> 🔥
                        <div>успеть до 31.05</div>
                    </div>
                </div>
            </div>
            <div className={cls.bottomRow}>
                <div className={cls.cardLevel} style={{color: levelCardColor[card.status.toLowerCase()]}}>
                    {card.status.toUpperCase()}
                </div>
                <div className={cls.countWrap}>
                    <div className={cls.uptext}>
                        доступно баллов
                    </div>
                    <div className={cls.countBonus}>
                        {card.bonusAmount}
                    </div>
                </div>
            </div>
        </div>
    )
}

export {BonusCard}