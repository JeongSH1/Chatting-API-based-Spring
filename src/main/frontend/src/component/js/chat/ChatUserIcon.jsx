import React from "react";
import defaultImg from "../../img/default_user.png"
import "../../css/chatusericon.css"
const ChatUserIcon = (props) => {
    return (
        <div className="chat_user_icon">
            <img src={defaultImg} alt="user_img"/>
        </div>
    );
}

export default ChatUserIcon