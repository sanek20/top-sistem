import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { levelCardColor } from '../../data/data'
import img from '../../img/trc.png'
import { cardFormatter } from '../../utils/cardFormatter'

import cls from './BonusCard.module.scss'


const BonusCard = () => {
	const card = useSelector((state) => state.card)

	return (
		<div className={cls.wrapper}>
			<div className={cls.topRow}>
				<Link to='/catalog' className={cls.tcSelect}>
					<div className={cls.tcSelectImg}>
						<img src={img} alt='' />
					</div>
					<div className={cls.tcText}>Выбрать ТЦ</div>
				</Link>
				<div className={cls.topRowRight}>
					<div className={cls.cardNumber}>{cardFormatter(card.number)}</div>
					<div className={cls.nextCard}>
						до {card.nextStatus} карты <span>{card.toNextStatus}</span> 🔥
						<div>успеть до 31.05</div>
					</div>
				</div>
			</div>
			<div className={cls.bottomRow}>
				<div
					className={cls.cardLevel}
					style={{ color: levelCardColor[card.status.toLowerCase()] }}
				>
					{card.status.toUpperCase()}
				</div>
				<div className={cls.countWrap}>
					<div className={cls.uptext}>доступно баллов</div>
					<div className={cls.countBonus}>{card.bonusAmount}</div>
				</div>
			</div>
		</div>
	)
}

export { BonusCard }