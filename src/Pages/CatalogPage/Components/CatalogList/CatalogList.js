import React from 'react'
import { useSelector } from 'react-redux'

import { CatalogListItem } from '../CatalogListItem/CatalogListItem'
import { SelectCity } from '../SelectCity/SelectCity'

import cls from './CatalogList.module.scss'


const CatalogList = ({ catalog, cities }) => {
	const { selectedCity } = useSelector((state) => state.shoppingCenters)

	return (
		<div className={cls.wrapper}>
			<SelectCity cities={cities} />
			<div className={cls.list}>
				{catalog.map((item) => {
					if (item.city === selectedCity && selectedCity !== 'Все города') {
						return (
							<div className={cls.listItem} key={item.name}>
								<CatalogListItem {...item} />
							</div>
						)
					} else if (selectedCity === 'Все города') {
						return (
							<div className={cls.listItem} key={item.name}>
								<CatalogListItem {...item} />
							</div>
						)
					}
				})}
			</div>
		</div>
	)
}

export { CatalogList }