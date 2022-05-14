import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { FooterPanel } from '../../Components/FooterPanel'
import { LayoutContent } from '../../Layouts/LayoutContent'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'

import cls from './CatalogPage.module.scss'
import { CatalogList } from './Components/CatalogList/CatalogList'


const CatalogPage = () => {
	const { auth } = useSelector((state) => state.auth)

	if (!auth) {
		return <Navigate to='/auth' replace />
	}

	return (
		<div className={cls.catalogPage}>
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				<h2>Торговые центры</h2>
				<CatalogList />
			</LayoutContent>
			<FooterPanel active={'catalog'} />
		</div>
	)
}

export { CatalogPage }