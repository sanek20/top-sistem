import React, {useContext} from "react";
import cls from './QRButton.module.scss'
import {set} from "react-hook-form";
import {QRCodeIcon} from "../UI/QRCodeIcon/QRCodeIcon";
import {ModalContext} from "../../Context/ModalContext/ModalContext";

const QRButton = () => {
    const {toggleOpen} = useContext(ModalContext)

    return (
        <button
            onClick={() => toggleOpen()}
            className={cls.wrapper}
        >
            <div className={cls.ellipse}>
                <QRCodeIcon size={20}/>
            </div>
            <div className={cls.text}>
                Показать QR-код
            </div>
        </button>
    )
}

export {QRButton}