import React, {useContext, useEffect} from "react";
import styles from './MainLayout.module.scss'
import {ModalContext} from "../../Context/ModalContext/ModalContext";
import {Modal} from "../../Containers/Modal";
import {QRRender} from "../../Components/QRRender/QRRender";
import {AppContext} from "../../Context/AppContext/AppContext";
import {cardFormatter} from "../../utils/cardFormatter";
import {CSSTransition} from "react-transition-group";

export const MainLayout = ({children}) => {
    const modalState = useContext(ModalContext)
    const {card} = useContext(AppContext)


    return (
        <main className={styles.mainLayout}>
            <CSSTransition
                in={modalState.open}
                timeout={300}
                classNames="alert"
                unmountOnExit
            >
                <Modal subContent={cardFormatter(card.number)} active={modalState.open}>
                    <QRRender/>
                </Modal>
            </CSSTransition>

            {children}
        </main>
    )
}