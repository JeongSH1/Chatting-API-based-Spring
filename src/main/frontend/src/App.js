import React, {createContext, useEffect, useState} from "react";
import JoinForm from "./component/js/form/JoinForm";
import {BrowserRouter, redirect, Route, Routes, useNavigate} from "react-router-dom";
import Main from "./component/js/Main";
import Login from "./component/login/Login";
import { Provider } from "react-redux";
import store from "./component/redux/Store";
import Join from "./component/join/Join";

function NotFound() {
    return null;
}


function App() {
    useEffect(() => {

    },[]);
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                        <Routes>
                            {/*<Route path="/" element={<JoinForm setUserId={setUserId} setUserName={setUserName}/>}></Route>*/}
                            <Route path="/main/*" element={<Main/>}></Route>
                            <Route path="/join/*" element={<Join/>}></Route>
                            <Route path="/login/*" element={<Login/>}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;