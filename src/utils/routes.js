import {MainPage} from "../Pages/MainPage";
import {ProfilePage} from "../Pages/ProfilePage";
import {CatalogPage} from "../Pages/CatalogPage";
import {CatalogItemPage} from "../Pages/CatalogItemPage";
import {AuthPage} from "../Pages/AuthPage";
import {QrScan} from "../Pages/QrScan";
import {BonusOperationPage} from "../Pages/BonusOperationPage";
import {useContext} from "react";
import {AppContext} from "../Context/AppContext/AppContext";

export const RenderRoutes = () => {
    const {user} = useContext(AppContext)
    console.log(user)
}

export const routes = [
    {path: '/', name: 'Main', authenticated: true, Component: MainPage},
    {path: '/profile', name: 'Profile', authenticated: true, Component: ProfilePage},
    {path: '/catalog', name: 'Catalog', authenticated: true, Component: CatalogPage},
    {path: '/catalog/:id', name: 'CatalogItemPage', authenticated: true, Component: CatalogItemPage},
    {path: '/auth', name: 'AuthPage', authenticated: false, Component: AuthPage},
    {path: '/scan', name: 'QrScan', authenticated: true, Component: QrScan},
    {path: '/bonus/:id', name: 'Bonus', authenticated: true, Component: BonusOperationPage},
]
