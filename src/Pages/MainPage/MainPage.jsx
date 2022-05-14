import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { FooterPanel } from '../../Components/FooterPanel'
import { Messages } from '../../Components/Messages'
import { AdsContainer } from '../../Containers/AdsContainer'
import { HeaderMain } from '../../Containers/HeaderMain'
import { HeaderMainManager } from '../../Containers/HeaderMain/HeaderMainManager'
import { AppContext } from '../../Context/AppContext/AppContext'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { LayoutContent } from '../../Layouts/LayoutContent'


const MainPage = () => {
	const { role, userData } = useContext(AuthContext)
	const { setDataOfUser } = useContext(AppContext)
	const { auth } = useSelector((state) => state.auth)

	useEffect(() => {
		return () => {
			try {
				!!userData.id && setDataOfUser(userData)
			} catch (e) {
				console.log('MAIN PAGE: ', e)
			}
		}
	}, [])

	if (!auth) {
		return <Navigate to='/auth' replace />
	}

	return (
		<>
			{role === 'manager' ? <HeaderMainManager /> : <HeaderMain />}
			<LayoutContent>
				<AdsContainer />
				<Messages />
			</LayoutContent>
			<FooterPanel active={'home'} />
		</>
	)
}

export { MainPage }