import React, {useContext} from 'react';
import {LayoutContent} from "../../Layouts/LayoutContent";
import {HeaderProfilePage} from "../ProfilePage/Components/HeaderProfilePage";
import cls from './QrScan.module.scss'
import {useScan} from "./hook/useScan";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import {Navigate} from "react-router-dom";


const QrScan = () => {
    const {
        success, showInput, isSubmitSuccessful, tryAgain,
        statusButton, inputForm, qrRender, checkNumber,} = useScan()
    const {auth} = useContext(AuthContext)


    if (!auth) {
        return <Navigate to="/auth" replace />
    }

    return (

        <div className={cls.qrScanPage}>
            <HeaderProfilePage avatar={false}/>
            <LayoutContent>
                <h2>Отсканируйте QR-код покупателя</h2>
                {!showInput && !isSubmitSuccessful ? qrRender : null}
                {success && checkNumber}
                {!showInput && statusButton}
                {showInput && inputForm}
                <button onClick={() => tryAgain()} className={cls.again}>Начать заново</button>
            </LayoutContent>
        </div>
    )
};

export {QrScan};
