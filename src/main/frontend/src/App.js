import React, {useEffect, useState} from "react";
import {BrowserRouter, createBrowserRouter, redirect, Route, Routes, useNavigate,} from "react-router-dom";
import Main from "./component/main/Main";
import Login from "./component/login/Login";
import { Provider } from "react-redux";
import store from "./component/redux/Store";
import Join from "./component/join/Join";
import List from "./component/main/list/List";
import axios from "axios";
import {createBrowserHistory} from "history";

function NotFound() {
    return null;
}
function App() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(true);
    useEffect(() => {
        const authenticate = async () => {
            await axios({
                method: "POST",
                url: "/authenticate",
                headers: {
                    "Content-Type": "application/json",
                },
                data: localStorage.getItem("token"),
                withCredentials: true,
            }).then(response => {
                console.log(response);
                const status = response.data.responseStatus;
                //(status === "AUTHENTICATED") ? setAuthenticated(true) : setAuthenticated(false);
                if (!authenticated)
                    navigate("/login");
            }).catch(() => {
                localStorage.clear();
            });
        }
        if (localStorage.getItem("token") !== null)
            authenticate().then();
    }, [authenticated])

    useEffect(() => {
        if ((window.location.pathname === "/"))
            navigate("/login")
    }, []);

    return (
        <div className="App">
            <Provider store={store}>
                <Routes>
                    {(authenticated) ?(<Route path="/main/*" element={<Main authenticated = {authenticated}/>}></Route>) : null}
                    <Route path="/join/*" element={<Join/>}></Route>
                    <Route path="/login/*" element={<Login/>}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Provider>
        </div>
    );
}

export default App;