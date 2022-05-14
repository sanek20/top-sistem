import React, {useContext} from 'react';
import cls from './ProfilePage.module.scss'
import {LayoutContent} from "../../Layouts/LayoutContent";
import {HeaderProfilePage} from "./Components/HeaderProfilePage";
import {ProfileForm} from "./Components/ProfileForm/ProfileForm";
import {FooterPanel} from "../../Components/FooterPanel";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import {Navigate} from "react-router-dom";


const ProfilePage = () => {
    const {auth, status} = useContext(AuthContext)

    if (!auth) {
        return <Navigate to="/auth" replace />
    }

    return (
        <div className={cls.profilePage}>
            <HeaderProfilePage avatar={true}/>
            <LayoutContent>
                <ProfileForm />

            </LayoutContent>
            <FooterPanel active={'profile'} />
        </div>
    );
};

export {ProfilePage};
