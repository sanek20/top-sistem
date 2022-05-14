import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TiWarning } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'

import { signOut } from '../../../../Store/AuthState/authSlice'
import { ages } from '../../../../data/data'
import { emailReg, phoneReg } from '../../../../data/regexp'

import cls from './ProfileForm.module.scss'


const ProfileForm = () => {
	const { user, card } = useSelector((state) => state)
	const dispatch = useDispatch()
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		mode: 'all'
	})

	const [loading, setLoading] = useState(false)

	const handleForm = async (data) => {
		setLoading(true)
		await console.log(data)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
		clearTimeout()
	}

	return (
		<div className={cls.wrapper}>
			<div className={cls.title}>Информация о профиле</div>

			<form onSubmit={handleSubmit(handleForm)} className={cls.formWrap}>
				{/*Card Number*/}
				<div className={cls.formItem}>
					<label>№ карты</label>
					<input
						className={cls.input}
						disabled
						{...register('cardNumber', {
							value: card.number
						})}
					/>
				</div>
				{/*First Name*/}
				<div className={cls.formItem}>
					<label>Имя</label>
					<input
						className={cls.input}
						{...register('firstName', {
							required: true,
							value: user.name
						})}
					/>
					<div className={cls.errMsg}>
						{errors?.firstName && (
							<span>
								<TiWarning />
								{errors?.firstName?.message || 'Введите корректное значение'}
							</span>
						)}
					</div>
				</div>

				{/*Sex*/}
				{/*...select form*/}
				<div className={cls.formItem}>
					<label>Sex</label>
					<select
						{...register('sex', {
							value: user.sex
						})}
					>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
				</div>

				{/*Age*/}
				{/*.. select form*/}
				<div className={cls.formItem}>
					<label>AGE</label>
					<select
						{...register('age', {
							value: user.age
						})}
					>
						{ages.map((i, idx) => {
							return (
								<option value={i.value} key={idx * Math.random()}>
									{i.label}
								</option>
							)
						})}
					</select>
				</div>

				{/*E-mail*/}
				<div className={cls.formItem}>
					<label>Email</label>
					<input
						type='email'
						className={errors?.email && cls.error}
						{...register('email', {
							pattern: {
								value: emailReg(),
								message: 'Введите корректный e-mail'
							},
							value: user.email
						})}
					/>
					<div className={cls.errMsg}>
						{errors?.email && (
							<span>
								<TiWarning />
								{errors?.email?.message || 'Введите корректное значение'}
							</span>
						)}
					</div>
				</div>
				{/*Phone*/}
				<div className={cls.formItem}>
					<label>Phone number</label>

					<input
						{...register('phone', {
							value: user.phone,
							minLength: 10,
							pattern: {
								value: phoneReg(),
								message: 'Введите телефон в формате +7ХХХХХХХХХХ'
							}
						})}
					/>

					<div className={cls.errMsg}>
						{errors?.phone && (
							<span>
								<TiWarning />
								{errors?.phone?.message || 'Введите корректное значение'}
							</span>
						)}
					</div>
				</div>
				<button className={cls.btn} disabled={loading}>
					{!loading ? 'Сохранить' : 'Загрузка...'}
				</button>
			</form>
			<Button
				onClick={() => dispatch(signOut())}
				sx={{ width: 1 / 3, mx: 'auto', mt: 3 }}
				variant='outlined'
				color='error'
			>
				Выйти
			</Button>
		</div>
	)
}

export { ProfileForm }