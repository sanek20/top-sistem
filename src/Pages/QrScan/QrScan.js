import React from 'react';
import {LayoutContent} from "../../Layouts/LayoutContent";
import {HeaderProfilePage} from "../ProfilePage/Components/HeaderProfilePage";
import cls from './QrScan.module.scss'
import {useScan} from "./hook/useScan";


const QrScan = () => {
    const {
        success, showInput, isSubmitSuccessful,
        statusButton, inputForm, qrRender, checkNumber,} = useScan()

    return (

        <div className={cls.qrScanPage}>
            <HeaderProfilePage avatar={false}/>
            <LayoutContent>
                <h2>Отсканируйте QR-код покупателя</h2>
                {!showInput && !isSubmitSuccessful ? qrRender : null}
                {success && checkNumber}
                {!showInput && statusButton}
                {showInput && inputForm}
            </LayoutContent>
        </div>
    )
};

export {QrScan};
