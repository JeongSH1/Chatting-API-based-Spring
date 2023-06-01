import React from "react";
import defaultImg from "../../img/default_user.png"
import "../../css/listfragment.css"
const ListFragment = (props) => {
    const name = props.name;
    const preview = props.preview;

    return (
        <div className="list_fragment">
            <div className="user_img">
                <img src={defaultImg} alt="user_img"/>
            </div>

            <div className="user_chat">
                <div className="user_name">
                    <span>
                        {name}
                    </span>
                </div>

                <div className="preview">
                    <span>
                        {preview}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default ListFragment