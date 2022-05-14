import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { FooterPanel } from '../../Components/FooterPanel'
import { LayoutContent } from '../../Layouts/LayoutContent'

import { HeaderProfilePage } from './Components/HeaderProfilePage'
import { ProfileForm } from './Components/ProfileForm/ProfileForm'
import cls from './ProfilePage.module.scss'


const ProfilePage = () => {
	const { auth } = useSelector((state) => state.auth)

	if (!auth) {
		return <Navigate to='/auth' replace />
	}

	return (
		<div className={cls.profilePage}>
			<HeaderProfilePage avatar={true} />
			<LayoutContent>
				<ProfileForm />
			</LayoutContent>
			<FooterPanel active={'profile'} />
		</div>
	)
}

export { ProfilePage }