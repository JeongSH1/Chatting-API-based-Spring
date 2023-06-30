import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./component/main/Main";
import Login from "./component/login/Login";
import { Provider } from "react-redux";
import Join from "./component/join/Join";
import RequireAuth from "./component/RequireAuth";

function NotFound() {
    return null;
}
function App() {

    return (
        <div className="App">
                <Routes>
                    <Route path="/join/*" element={<Join/>}></Route>
                    <Route path="/login/*" element={<Login/>}></Route>
                    <Route element={<RequireAuth/>}>
                        <Route path = "/"></Route>
                        <Route path="/main" element={<Main/>}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
        </div>
    );
}

export default App;