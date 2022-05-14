import React, {useEffect, useState} from 'react';
import {backgrounds, gradientsStatus} from "../../../data/data";
import {useSelector} from "react-redux";

export const useBackground = () => {
    const card = useSelector(state => state.card)
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


