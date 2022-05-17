import { QRCodeSVG } from 'qrcode.react'
import React from 'react'
import { useSelector } from 'react-redux'

const QRRender = () => {
	const { number } = useSelector((state) => state.card)

	if (number === '') {
		return 'Loading...'
	}
	return (
		<QRCodeSVG
			value={number}
			size={230}
			bgColor={'#fff'}
			fgColor={'#000'}
			includeMargin={false}
			level={'L'}
		/>
	)
}

export { QRRender }