import React from 'react';
import cls from './CatalogPage.module.scss'
import {HeaderProfilePage} from "../ProfilePage/Components/HeaderProfilePage";
import {FooterPanel} from "../../Components/FooterPanel";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {CatalogList} from "./Components/CatalogList/CatalogList";

const CatalogPage = () => {

    return (
        <div className={cls.catalogPage}>
            <HeaderProfilePage avatar={false} />
            <LayoutContent>
                <h2>Торговые центры</h2>
                <CatalogList />
            </LayoutContent>
            <FooterPanel active={'catalog'} />
        </div>
    );
};

export {CatalogPage};
