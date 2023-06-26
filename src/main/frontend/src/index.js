import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, BrowserRouter as Route, Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import Store from "./component/redux/Store";

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Provider store={Store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
