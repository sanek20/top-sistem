import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import { FooterPanel } from '../../Components/FooterPanel'
import { ShopsList } from '../../Components/ShopsList'
import { LayoutContent } from '../../Layouts/LayoutContent'
import cls from '../CatalogPage/CatalogPage.module.scss'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'

import { CatalogItemPreview } from './Components/CatalogItemPreview/CatalogItemPreview'


const CatalogItemPage = () => {
	let { id: itemId } = useParams()
	const [data, setData] = useState({})
	const { auth } = useSelector((state) => state.auth)

	if (!auth) {
		return <Navigate to='/auth' replace />
	}

	// useEffect(() => {
	// 	return () => {
	// 		setData(catalogList.find((i) => i.id === itemId))
	// 	}
	// }, [])

	// useMemo(() => setData(catalogList.find(i => i.id === itemId)), data);
	return (
		<div className={cls.catalogPage}>
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				<CatalogItemPreview {...data} />
				<ShopsList />
			</LayoutContent>
			<FooterPanel active={'catalog'} />
		</div>
	)
}

export { CatalogItemPage }