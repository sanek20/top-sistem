import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { FooterPanel } from '../../Components/FooterPanel'
import { Messages } from '../../Components/Messages'
import { AdsContainer } from '../../Containers/AdsContainer'
import { HeaderMain } from '../../Containers/HeaderMain'
import { HeaderMainManager } from '../../Containers/HeaderMain/HeaderMainManager'
import { LayoutContent } from '../../Layouts/LayoutContent'
import { setCoords } from '../../Store/UserState/userSlice'


const MainPage = () => {
	const { auth, isManager, isVerified } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((pos) => {
				const coords = [pos.coords.latitude, pos.coords.longitude]
				if (typeof coords !== 'undefined') {
					dispatch(setCoords(coords))
				}
			})
		}
	}, [])

	if (!auth) {
		return <Navigate to='/auth' replace />
	}

	if (!isVerified) {
		return <Navigate to='/verified/fs' replace />
	}

	return (
		<>
			{isManager ? <HeaderMainManager /> : <HeaderMain />}
			<LayoutContent>
				<AdsContainer />
				<Messages />
			</LayoutContent>
			<FooterPanel active={'home'} />
		</>
	)
}

export { MainPage }