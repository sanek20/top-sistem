import React, {useContext, useEffect, useState} from "react";
import {HeaderMain} from "../../Containers/HeaderMain";
import {AdsContainer} from "../../Containers/AdsContainer";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {Messages} from "../../Components/Messages";
import {FooterPanel} from "../../Components/FooterPanel";
import {AppContext} from "../../Context/AppContext/AppContext";
import {HeaderMainManager} from "../../Containers/HeaderMain/HeaderMainManager";

const MainPage = () => {
    const {status} = useContext(AppContext)

    return (
        <>
            {status === 'manager' ? <HeaderMainManager /> : <HeaderMain/>}
            <LayoutContent>
                <AdsContainer/>
                <Messages/>
            </LayoutContent>
            <FooterPanel active={'home'}/>
        </>
    )
}

export {MainPage}