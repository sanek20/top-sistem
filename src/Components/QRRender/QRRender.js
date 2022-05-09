import React, {useContext} from 'react';
import {QRCodeSVG} from 'qrcode.react'
import {AppContext} from "../../Context/AppContext/AppContext";

const QRRender = (value) => {
    const {card} = useContext(AppContext)

    if (card.number === '') {
        return "Loading..."
    }
    return (
        <QRCodeSVG
            value={card.number}
            size={230}
            bgColor={'#fff'}
            fgColor={'#000'}
            includeMargin={false}
            level={'L'}
        />
    );
}

export {QRRender};
