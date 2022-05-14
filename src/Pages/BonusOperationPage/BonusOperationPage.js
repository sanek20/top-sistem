import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { LayoutContent } from '../../Layouts/LayoutContent'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'
import cls from '../QrScan/QrScan.module.scss'


const BonusOperationPage = () => {
	const { auth } = useSelector((state) => state.auth)

	if (!auth) {
		return <Navigate to='/auth' replace />
	}
	return (
		<div className={cls.qrScanPage}>
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				<h2>Операции с баллами</h2>
			</LayoutContent>
		</div>
	)
}

export { BonusOperationPage }