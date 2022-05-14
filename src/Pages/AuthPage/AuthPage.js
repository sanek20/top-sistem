import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Logo } from '../../Components/BonusCard/Logo'
import { Loader } from '../../Components/UI/Loader'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { LayoutContent } from '../../Layouts/LayoutContent'

import cls from './AuthPage.module.scss'
import { AuthForm } from './Components/AuthForm'
import { useAuthPage } from './hook/useAuthPage'


const AuthPage = () => {
	const { underBlock, authFormat } = useAuthPage()
	const { loading, error } = useContext(AuthContext)
	const { auth } = useSelector((state) => state.auth)

	if (auth) {
		return <Navigate to='/' replace />
	}

	return (
		<div className={cls.authPage}>
			{loading && <Loader />}
			<Logo />
			<LayoutContent>
				<h2 className={cls.title}>
					{authFormat ? 'Авторизация' : 'Регистрация'}
				</h2>
				<AuthForm />
				{error && (
					<div className={cls.errorMsg}>
						{authFormat
							? 'Неправильный логин или пароль'
							: 'Пользователь уже зарегистрирован'}
					</div>
				)}
				<div className={cls.underBlock}>{underBlock()}</div>
			</LayoutContent>
		</div>
	)
}

export { AuthPage }