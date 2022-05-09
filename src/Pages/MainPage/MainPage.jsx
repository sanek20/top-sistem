import React, {useState} from "react";
import {HeaderMain} from "../../Containers/HeaderMain";
import {AdsContainer} from "../../Containers/AdsContainer";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {Messages} from "../../Components/Messages";
import {FooterPanel} from "../../Components/FooterPanel";

const MainPage = () => {


    return (
        <>
            <HeaderMain/>
            <LayoutContent>
                <AdsContainer/>
                <Messages/>
            </LayoutContent>
            <FooterPanel active={'home'}/>
        </>
    )
}

export {MainPage}