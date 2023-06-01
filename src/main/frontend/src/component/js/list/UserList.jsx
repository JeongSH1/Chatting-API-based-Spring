import React, {useContext} from "react";
import ListHeader from "./ListHeader";
import "../../css/userlist.css"
import ListFragment from "./ListFragment";
const UserList = (props) => {
    return (
        <div className = "user_list">
            <ListHeader/>
            <ListFragment/>
        </div>
    )
}

export default UserList