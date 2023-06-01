import React, {createContext, useContext, useEffect, useState} from "react";
import "../css/main.css"
import Chat from "./chat/Chat";

const Main = (props) => {
    return (
        <div className="main">
            <Chat/>
        </div>
    )
}
export default Main;