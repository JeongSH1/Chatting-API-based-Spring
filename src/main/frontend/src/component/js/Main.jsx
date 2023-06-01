import React, {createContext, useContext, useEffect, useState} from "react";
import UserList from "./list/UserList";
import "../css/main.css"
import Chat from "./chat/Chat";
import {UserContext} from "../../App";

const Main = (props) => {

    return (
        <div className="main">
            <Chat/>
        </div>
    )
}
export default Main;