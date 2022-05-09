import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.module.scss';
import {MainLayout} from "../Layouts/MainLayout/MainLayout";
import {ModalState} from "../Context/ModalContext/ModalState";
import {routes} from "../utils/routes";
import {AppState} from "../Context/AppContext/AppState";

function App() {

    return (
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
    );
}

export default App;
