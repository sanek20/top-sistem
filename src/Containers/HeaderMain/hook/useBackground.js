import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../../Context/AppContext/AppContext";
import {backgrounds} from "../../../data/data";

export const useBackground = () => {
    const {card} = useContext(AppContext)
    const [background, setBackground] = useState()

    const bgStyles = async () => {
        const bg = await backgrounds.find(i => i.status === card.status)
        return ({backgroundImage: `url('${bg.asset}')`})
    }

    useEffect(() => {
        bgStyles()
            .then(res => setBackground(res))
    }, [card])

    return {
        background
    }

};


