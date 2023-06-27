import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./component/main/Main";
import Login from "./component/login/Login";
import { Provider } from "react-redux";
import store from "./component/redux/Store";
import Join from "./component/join/Join";
import RequireAuth from "./component/RequireAuth";

function NotFound() {
    return null;
}
function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <Routes>
                    <Route path="/join/*" element={<Join/>}></Route>
                    <Route path="/login/*" element={<Login/>}></Route>
                    <Route element={<RequireAuth/>}>
                        <Route path = "/"></Route>
                        <Route path="/main" element={<Main/>}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Provider>
        </div>
    );
}

export default App;