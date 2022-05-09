import React, {useState} from 'react';

import cls from '../../scss/Messages.module.scss'

const MessagesListItem = ({avatar, name = "Arina"}) => {
    const [newMsg, setNewMsg] = useState(true)

    const msgStyles = [cls.text]
    newMsg && msgStyles.push(cls.newMsgText)

    return (
        <div onClick={() => setNewMsg(prevState => !prevState)} className={cls.listItemWrapper}>
            <div className={cls.avatar}>
                {avatar
                    ? <img src={avatar} alt=""/>
                    : <div className={cls.placeholder}><span>{name[0].toString().toUpperCase()}</span></div>}
            </div>
            <div className={cls.body}>
                <div className={cls.name}>
                    Arina {newMsg && <span className={cls.indicator} />}
                </div>
                <div className={msgStyles.join(' ')}>
                    Добрый день! Мы проверили наличие товаров в намшем магазине. Мы можем забронировать для  Мы можем забронировать для
                </div>
            </div>
        </div>
    );
}

export {MessagesListItem};
