import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../../Context/AppContext/AppContext";
import {backgrounds, gradientsStatus} from "../../../data/data";

export const useBackground = () => {
    const {card} = useContext(AppContext)
    const [background, setBackground] = useState()
    const [gradient, setGradient] = useState()

    const bgStyles = async () => {
        const bg = await backgrounds.find(i => i.status === card.status)
        return ({backgroundImage: `url('${bg.asset}')`})
    }

    const bgGradients = async () => {
        const bg = await gradientsStatus.find(i => i.status === card.status)
        return bg.asset
    }

    useEffect(() => {
        bgGradients()
            .then(res => setGradient(res))
        bgStyles()
            .then(res => setBackground(res))
    }, [card])

    return {
        background,
        gradient
    }

};


