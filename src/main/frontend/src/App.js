import React, {useState} from "react";
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Main from "./component/main/Main";
import Login from "./component/login/Login";
import { Provider } from "react-redux";
import store from "./component/redux/Store";
import Join from "./component/join/Join";
import List from "./component/main/list/List";

function NotFound() {
    return null;
}


function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                        <Routes>
                            <Route path="/main/*" element={<List/>}></Route>
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