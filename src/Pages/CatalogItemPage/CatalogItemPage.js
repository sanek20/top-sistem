import React, {useContext, useEffect, useMemo, useState} from 'react';
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
    const [data, setData] = useState({})

    useEffect(() => {
        return () => {
            setData(catalogList.find(i => i.id === itemId))
        };
    }, []);


    // useMemo(() => setData(catalogList.find(i => i.id === itemId)), data);

    console.log(data)

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
