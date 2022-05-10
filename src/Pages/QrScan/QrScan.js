import React, {useEffect, useState} from 'react';
import {QrReader} from "react-qr-reader";
import {useNavigate} from "react-router-dom";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {HeaderProfilePage} from "../ProfilePage/Components/HeaderProfilePage";
import cls from './QrScan.module.scss'
import {cardFormatter} from "../../utils/cardFormatter";
import {AiOutlineScan} from "react-icons/ai";
import {MdDoneAll} from 'react-icons/md'
import InputMask from "react-input-mask";
import {useForm} from "react-hook-form";
import {GrLinkNext} from "react-icons/gr";


const QrScan = () => {
    const [data, setData] = useState('');
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const navigate = useNavigate()
    const {register, formState: { errors }} = useForm({mode: "onTouched"})

    const resultHandler = (res, err) => {
        if (!!res) {
            if (res.toString() > 16) {
                setError(false)
                setSuccess(true)
                setShowInput(false)
                setData(cardFormatter(res.toString()))
            } else {
                setError(true)
            }
        } else if (!!err) {
            setError(true)
        }

    }

    return (

        <div className={cls.qrScanPage}>
            <HeaderProfilePage avatar={false}/>
            <LayoutContent>
                <h2>Отсканируйте QR-код покупателя</h2>
                {!showInput && <QrReader
                    constraints={{facingMode: 'environment'}}
                    scanDelay={1000}
                    onResult={(result, error) => resultHandler(result, error)}
                    style={{width: '100%', height: '100%'}}
                />}
                {success && <div className={cls.cardNumber}>
                    <p>Пожалуйста, проверьте номер карты</p>
                    <div>{data}</div>
                    <p>если всё верно, то нажмите "Продолжить"</p>
                </div>}
                {!showInput &&
                    <>
                        <button disabled={error && !success} className={error && !success ? cls.error : cls.success}>
                            {error && !success
                                ? <><AiOutlineScan/> Сканируем...</>
                                : <><MdDoneAll/>Продожить</>
                            }
                        </button>
                        <div className={cls.showInput}>
                            или <span onClick={() => setShowInput(true)}>введите код</span>
                        </div>
                    </>}
                {showInput && <>
                <form className={cls.formWrap}>
                    <InputMask mask="9999 9999 9999 9999"
                               type="tel"
                               className={cls.formInput}
                               {...register('phone', {
                                   minLength: 16
                               })}>
                        {(props) => (
                            <input {...props}/>
                        )}
                    </InputMask>
                    <button className={cls.formBtn}><GrLinkNext /></button>
                </form>
                <div onClick={() => setShowInput(false)} className={cls.showInput}><span>Открыть камеру</span></div>
                </>}

            </LayoutContent>
        </div>
    )
};

export {QrScan};
