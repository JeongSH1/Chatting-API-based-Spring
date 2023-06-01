import React from "react";
import "../../css/chattext.css"
const ChatText = (props) => {
    return (
        <div className="chat_fragment">
            <p className="small p-2 ms-3 mb-1 rounded-3">{props.content}</p>
        </div>
    );
}

export default ChatText;