import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.module.scss';
import {MainLayout} from "../Layouts/MainLayout/MainLayout";
import {ModalState} from "../Context/ModalContext/ModalState";
import {routes} from "../utils/routes";
import {AppState} from "../Context/AppContext/AppState";

import {AuthState} from "../Context/AuthContext/AuthState";
import {useDispatch} from "react-redux";
import {autoSign} from "../Store/AuthState/authServices";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(autoSign())
    }, []);


    return (
        <AuthState>
            <ModalState>
                <AppState>
                    <MainLayout>
                        <BrowserRouter>
                            <Routes>

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
