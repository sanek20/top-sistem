import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../../Context/AppContext/AppContext";
import {backgrounds, gradientsStatus} from "../../../data/data";

export const useBackground = () => {
    const {card} = useContext(AppContext)
    const [background, setBackground] = useState()
    const [gradient, setGradient] = useState()
    const status = card.status.toLowerCase()

    const bgStyles = async () => {
        try {
            const bg = await backgrounds.find(i => i.status === status).asset
            return ({backgroundImage: `url('${bg}')`})
        } catch (e) {
            console.log(e)
        }
    }

    const bgGradients = async () => {
        const bg = await gradientsStatus.find(i => i.status === status)
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


