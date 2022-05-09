import React from 'react';
import cls from './ProfilePage.module.scss'
import {LayoutContent} from "../../Layouts/LayoutContent";
import {HeaderProfilePage} from "./Components/HeaderProfilePage";
import {ProfileForm} from "./Components/ProfileForm/ProfileForm";
import {FooterPanel} from "../../Components/FooterPanel";

const ProfilePage = () => {
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
