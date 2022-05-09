import React from 'react';
import {MessagesList} from "./components/MessagesList/MessagesList";

import cls from './scss/Messages.module.scss'

const Messages = () => {
    return (
        <div className={cls.msgWrapper}>
            <div className={cls.header}>
                <div className={cls.title}>
                    Сообщения
                </div>
                <div className={cls.newMsgIcon}/>
            </div>
            <MessagesList/>
        </div>
    );
};

export {Messages};
