import React from 'react'

import cls from './AdsBlock.module.scss'


const AdsBlock = ({ asset, loading }) => {
	return (
		<div className={cls.wrapper}>
			<a href={asset?.link}>
				<img src={'https://top-sistem.ru' + asset?.image_link} alt='' />
			</a>
		</div>
	)
}

export { AdsBlock }