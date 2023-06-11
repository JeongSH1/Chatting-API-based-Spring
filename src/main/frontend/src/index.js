import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, BrowserRouter as Route, Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./component/login/Login";

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <BrowserRouter>
            <App/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
