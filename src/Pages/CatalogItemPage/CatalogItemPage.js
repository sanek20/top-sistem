import React, {useContext, useEffect, useMemo, useState} from 'react';
import cls from "../CatalogPage/CatalogPage.module.scss";
import {HeaderProfilePage} from "../ProfilePage/Components/HeaderProfilePage";
import {LayoutContent} from "../../Layouts/LayoutContent";
import {FooterPanel} from "../../Components/FooterPanel";
import {CatalogItemPreview} from "./Components/CatalogItemPreview/CatalogItemPreview";
import {Navigate, useParams} from "react-router-dom";
import {catalogList} from "../../data/data";
import {ShopsList} from "../../Components/ShopsList";
import {AuthContext} from "../../Context/AuthContext/AuthContext";

const CatalogItemPage = () => {
    let {id: itemId} = useParams()
    const [data, setData] = useState({})
    const {auth} = useContext(AuthContext)

    if (!auth) {
        return <Navigate to="/auth" replace />
    }

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
