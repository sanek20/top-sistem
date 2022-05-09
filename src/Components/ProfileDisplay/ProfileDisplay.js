import React, {useContext} from "react";
import cls from "./scss/ProfileDisplay.module.scss";
import placeholderAvatar from '../../img/placeholderAvatar.png'
import {Link} from "react-router-dom";
import {AppContext} from "../../Context/AppContext/AppContext";

const ProfileDisplay = ({type}) => {
    const {user} = useContext(AppContext)

    const full = type === 'full'
    return (
        <div className={full ? cls.ProfileDisplayWrap : cls.ProfileDisplayWrapLight}>
            <div className={full ? cls.avatar : cls.avatarLight}>
                <img src={user.avatar || placeholderAvatar} alt="UserAvatar"/>
            </div>
            <div className={full ? cls.nameWrap : cls.nameWrapLight}>
                <div className={full ? cls.name : cls.nameLight}>
                    {user.name || 'Имя пользователя'}
                </div>
                {full && <Link to={'/profile'} className={full ? cls.editProfile : cls.editProfileLight}>
                    Редактировать профиль
                </Link>}
            </div>
        </div>
    )
}

export {ProfileDisplay}