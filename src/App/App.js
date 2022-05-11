import React, {useContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.module.scss';
import {MainLayout} from "../Layouts/MainLayout/MainLayout";
import {ModalState} from "../Context/ModalContext/ModalState";
import {routes} from "../utils/routes";
import {AppState} from "../Context/AppContext/AppState";
import {MainPage} from "../Pages/MainPage";
import {ProfilePage} from "../Pages/ProfilePage";
import {CatalogPage} from "../Pages/CatalogPage";
import {CatalogItemPage} from "../Pages/CatalogItemPage";
import {AuthPage} from "../Pages/AuthPage";
import {QrScan} from "../Pages/QrScan";
import {BonusOperationPage} from "../Pages/BonusOperationPage";
import {AuthState} from "../Context/AuthContext/AuthState";

function App() {

    return (
        <AuthState>
            <ModalState>
                <AppState>
                    <MainLayout>
                        <BrowserRouter>
                            <Routes>
                                {/*<Route path="/" exact={true} element={<AuthLayout><MainPage /></AuthLayout>}/>*/}
                                {/*<Route path="/profile" element={<AuthLayout><ProfilePage /></AuthLayout>}/>*/}
                                {/*<Route path="/catalog" element={<AuthLayout><CatalogPage /></AuthLayout>}/>*/}
                                {/*<Route path="/catalog/:id" element={<AuthLayout><CatalogItemPage /></AuthLayout>}/>*/}
                                {/*<Route path="/auth" element={<AuthLayout><AuthPage /></AuthLayout>}/>*/}
                                {/*<Route path="/scan" element={<AuthLayout><QrScan /></AuthLayout>}/>*/}
                                {/*<Route path="/bonus/:id" element={<AuthLayout><BonusOperationPage /></AuthLayout>}/>*/}

                                {routes.map(({path, Component}) => {
                                    return <Route
                                        key={path}
                                        path={path}
                                        exact={path === '/'}
                                        element={<Component/>}/>
                                })}
                            </Routes>
                        </BrowserRouter>
                    </MainLayout>
                </AppState>
            </ModalState>
        </AuthState>
    );
}

export default App;
