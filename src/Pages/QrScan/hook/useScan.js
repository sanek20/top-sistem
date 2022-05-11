import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {cardFormatter} from "../../../utils/cardFormatter";
import cls from "../QrScan.module.scss";
import {AiOutlineScan} from "react-icons/ai";
import {MdDoneAll} from "react-icons/md";
import InputMask from "react-input-mask";
import {GrLinkNext} from "react-icons/gr";
import {QrReader} from "react-qr-reader";
import {superTrim} from "../../../utils/superTrim";

const useScan = () => {
    const [data, setData] = useState('');
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const navigate = useNavigate()
    const {register, formState: {errors, isSubmitSuccessful}, handleSubmit} = useForm({mode: "all"})

    const resultHandler = async (res, err) => {
        if (!!res) {
            if (res.text.length === 16) {
                setError(false)
                setSuccess(true)
                setShowInput(false)
                setData(res.text)
            } else {
                setError(true)
            }
        } else if (!!err) {
            setError(true)
        }
    }

    const handleForm = async (d) => {
        setLoading(true)
        setError(false)
        setSuccess(true)
        setShowInput(false)
        setData(superTrim(d.card))
    }

    const showInputHandler = (val) => {
        setShowInput(val)
    }

    const statusButton = <>
        <button disabled={error && !success} className={error && !success ? cls.error : cls.success}>
            {error && !success
                ? <><AiOutlineScan/> Сканируем...</>
                : <><MdDoneAll/>Продожить</>
            }
        </button>
        <div className={cls.showInput}>
            или <span onClick={() => showInputHandler(true)}>введите код</span>
        </div>
    </>

    const inputForm = <>
        <form className={cls.formWrap} onSubmit={handleSubmit(handleForm)}>
            <InputMask mask="9999 9999 9999 9999"
                       type="tel"
                       className={cls.formInput}
                       {...register('card', {
                           minLength: {
                               value: 16,
                               message: "Минимум 16 символов"
                           }
                       })}>
                {(props) => (
                    <input {...props}/>
                )}
            </InputMask>
            <button className={cls.formBtn}><GrLinkNext/></button>
        </form>
        <div onClick={() => showInputHandler(false)} className={cls.showInput}><span>Открыть камеру</span></div>
    </>

    const qrRender = <>
        <QrReader
            constraints={{facingMode: 'environment'}}
            scanDelay={1000}
            onResult={(result, error) => resultHandler(result, error)}
            style={{width: '100%', height: '100%'}}
        />
    </>

    const checkNumber = <div className={cls.cardNumber}>
        <p>Пожалуйста, проверьте номер карты</p>
        <div>{cardFormatter(data)}</div>
        <p>если всё верно, то нажмите "Продолжить"</p>
    </div>

    return {
        data,
        error,
        success,
        showInput,
        navigate,
        register,
        errors,
        showInputHandler,
        resultHandler,
        statusButton,
        inputForm,
        qrRender,
        checkNumber,
        isSubmitSuccessful
    }
};

export {useScan};
