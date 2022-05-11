import React, {useContext, useEffect} from "react";
import cls from './QRButton.module.scss'
import {set} from "react-hook-form";
import {QRCodeIcon} from "../UI/QRCodeIcon/QRCodeIcon";
import {ModalContext} from "../../Context/ModalContext/ModalContext";
import {AppContext} from "../../Context/AppContext/AppContext";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import {useNavigate} from "react-router-dom";

const QRButton = () => {
    const {toggleOpen} = useContext(ModalContext)
    const {status} = useContext(AppContext)
    const {isManager} = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <button
            onClick={() => isManager ? navigate("/scan", {replace: true}) : toggleOpen()}
            className={cls.wrapper}
        >
            <div className={cls.ellipse}>
                <QRCodeIcon size={20}/>
            </div>
            <div className={cls.text}>
                {isManager ? "Сканировать QR-код" : "Показать QR-код"}
            </div>
        </button>
    )
}

export {QRButton}