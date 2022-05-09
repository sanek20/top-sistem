import React, {useContext} from 'react';
import cls from "../CatalogPage/CatalogPage.module.scss";
import {HeaderProfilePage} from "../ProfilePage/Components/HeaderProfilePage";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {FooterPanel} from "../../Components/FooterPanel";
import {CatalogItemPreview} from "./Components/CatalogItemPreview/CatalogItemPreview";
import {useParams} from "react-router-dom";
import {catalogList} from "../../data/data";
import {ShopsList} from "../../Components/ShopsList";
import {ModalContext} from "../../Context/ModalContext/ModalContext";

const CatalogItemPage = () => {
    let {id: itemId} = useParams()
    const modalState = useContext(ModalContext)

    console.log(modalState)

    const data = catalogList.find(i => i.id === itemId)

    return (
        <div className={cls.catalogPage}>
            <HeaderProfilePage avatar={false}/>
            <LayoutContent>
                <CatalogItemPreview {...data} />
                <ShopsList />
            </LayoutContent>
            <FooterPanel active={'catalog'}/>
        </div>
    );
}

export {CatalogItemPage};
