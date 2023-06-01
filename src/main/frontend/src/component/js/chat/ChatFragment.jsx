import React from "react";
import ChatText from "./ChatText";
import ChatUserIcon from "./ChatUserIcon";
import "../../css/chatfragment.css"

const ChatFragment = (props) => {
    return (
        <div className="chat_fragment">
            <ChatUserIcon/>
            <ChatText content="HI"/>
        </div>
    )
}

export default ChatFragment