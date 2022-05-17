import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { backgrounds, gradientsStatus } from '../../../data/data'


export const useBackground = () => {
	const card = useSelector((state) => state.card)
	const { isManager } = useSelector((state) => state.auth)
	const [background, setBackground] = useState()
	const [gradient, setGradient] = useState()
	const status = card.status.toLowerCase()

	const bgStyles = async () => {
		try {
			if (!!isManager) {
				const bgM = await backgrounds.find((i) => i.status === 'manager').asset
				return { backgroundImage: `url('${bgM}')` }
			}
			const bg = await backgrounds.find((i) => i.status === status).asset
			return { backgroundImage: `url('${bg}')` }
		} catch (e) {
			console.log(e)
		}
	}

	const bgGradients = async () => {
		try {
			if (!!isManager) {
				return gradientsStatus.find((i) => i.status === 'manager').asset
			} else {
				const bg = await gradientsStatus.find((i) => i.status === status)
				return bg.asset
			}
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		bgGradients().then((res) => setGradient(res))
		bgStyles().then((res) => setBackground(res))
	}, [card])

	return {
		background,
		gradient
	}
}