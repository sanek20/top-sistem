import React, {useContext, useEffect, useState} from "react";
import {HeaderMain} from "../../Containers/HeaderMain";
import {AdsContainer} from "../../Containers/AdsContainer";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {Messages} from "../../Components/Messages";
import {FooterPanel} from "../../Components/FooterPanel";
import {HeaderMainManager} from "../../Containers/HeaderMain/HeaderMainManager";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import {Navigate, useLocation} from 'react-router-dom'
import {AppContext} from "../../Context/AppContext/AppContext";

const MainPage = () => {
    const {auth, role, userData} = useContext(AuthContext)
    const {setDataOfUser} = useContext(AppContext)

    useEffect(() => {
        return () => {
            try {
                !!userData.id && setDataOfUser(userData)
            } catch (e) {
                console.log("MAIN PAGE: ", e)
            }
        };
    }, []);


    if (!auth) {
        return <Navigate to="/auth" replace />
    }

    return (
        <>
            {role === 'manager' ? <HeaderMainManager /> : <HeaderMain/>}
            <LayoutContent>
                <AdsContainer/>
                <Messages/>
            </LayoutContent>
            <FooterPanel active={'home'}/>
        </>
    )
}

export {MainPage}