import {MainPage} from "../Pages/MainPage";
import {ProfilePage} from "../Pages/ProfilePage";
import {CatalogPage} from "../Pages/CatalogPage";
import {CatalogItemPage} from "../Pages/CatalogItemPage";
import {AuthPage} from "../Pages/AuthPage";
import {QrScan} from "../Pages/QrScan";

export const routes = [
    {path: '/', name: 'Main', Component: MainPage},
    {path: '/profile', name: 'Profile', Component: ProfilePage},
    {path: '/catalog', name: 'Catalog', Component: CatalogPage},
    {path: '/catalog/:id', name: 'CatalogItemPage', Component: CatalogItemPage},
    {path: '/auth', name: 'AuthPage', Component: AuthPage},
    {path: '/scan', name: 'QrScan', Component: QrScan},
]