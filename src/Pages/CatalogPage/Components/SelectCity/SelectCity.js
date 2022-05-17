import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { setSelectedCity } from '../../../../Store/ShoppingCenters/shoppingCentersSlice'
import cls from '../../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'


const SelectCity = ({ cities }) => {
	const {
		register,
		formState: { errors },
		watch,
		setValue
	} = useForm({
		mode: 'all'
	})
	const dispatch = useDispatch()
	const { selectedCity } = useSelector((state) => state.shoppingCenters)

	React.useEffect(() => {
		const subscription = watch((value) => changeSelect(value))
		return () => subscription.unsubscribe()
	}, [watch])

	const changeSelect = (data) => {
		dispatch(setSelectedCity(data.city))
	}

	return (
		<div className={cls.formItem}>
			<label>Город</label>
			<select
				placeholder='Выберите город'
				{...register('city', {
					onChange: setValue('city', selectedCity)
				})}
			>
				{cities.map((i, idx) => {
					return (
						<option value={i} key={idx * Math.random()}>
							{i}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export { SelectCity }