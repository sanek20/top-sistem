import React from 'react';
import {MessagesListItem} from "../MessagesListItem/MessagesListItem";

import cls from '../../scss/Messages.module.scss'

const MessagesList = () => {

    const arr = [12, 12, 12, 12, 1, 21, 21, 2, 12, 1, 2, 12, 1]

    return (
        <div className={cls.listWrapper}>
            {arr.map((i, idx) => <MessagesListItem key={idx}/>)}
        </div>
    );
};

export {MessagesList};
