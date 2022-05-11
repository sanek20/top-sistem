import React, {useContext} from 'react';
import cls from "../QrScan/QrScan.module.scss";
import {HeaderProfilePage} from "../ProfilePage/Components/HeaderProfilePage";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import {Navigate} from "react-router-dom";

const BonusOperationPage = () => {
    const {auth} = useContext(AuthContext)

    if (!auth) {
        return <Navigate to="/auth" replace />
    }
    return (
        <div className={cls.qrScanPage}>
            <HeaderProfilePage avatar={false}/>
            <LayoutContent>
                <h2>Операции с баллами</h2>

            </LayoutContent>
        </div>
    );
};

export {BonusOperationPage};
