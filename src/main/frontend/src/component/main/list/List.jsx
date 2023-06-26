import React, {useEffect, useState} from "react";
import {MDBCol, MDBIcon, MDBInputGroup, MDBTypography} from "mdb-react-ui-kit";
import ListFragment from "./ListFragment";
import axios from "axios";
import {ButtonGroup, DropdownButton, Dropdown, Button} from "react-bootstrap";
import "./list.css"
import MemberList from "./MemberList";
import {useNavigate} from "react-router-dom";

const List = () => {
    const token = localStorage.getItem("token");
    const [visible, setVisible] = useState(false);
    const [chatList, setChatList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    const loadChatList = async () => {
        await axios({
            method: "POST",
            url: "/authenticate",
            headers: {
                "Content-Type" : "application/json",
            },
            data: token,
            withCredentials: true,
        }).then(async (response) => {
            await axios({
                method: "POST",
                url: "/load/chatList",
                headers: {
                    "Content-Type" : "application/json",
                },
                data: token,
                withCredentials: true,
            }).then((response)=>{
                setChatList(response.data);
                setVisible(false);
                setRefresh(false);
            })

        }).catch((response) => {
            alert("auth error: list");
            navigate("/login");
        });

    }

    const create = async () => {
        // await axios({
        //     method: "POST",
        //     url: "/chat/create",
        //     headers: {
        //         "Content-Type" : "application/json",
        //     },
        //     data: token,
        //     withCredentials: true,
        // })
        visible ? setVisible(false) : setVisible(true);
    }

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }
    useEffect(() => {
        loadChatList().then();
    }, [refresh])

    return (
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
            {visible ?  <MemberList setRefresh = {setRefresh} /> : null}

            <div className="btn_wrap">
                <Button variant="primary" size="lg" className="btn_create" onClick={create}>
                    create
                </Button>
                <Button variant="primary" size="lg" className="btn_logout" onClick={logout}>
                    logout
                </Button>
            </div>
            <div className="p-3">
                <MDBInputGroup className="rounded mb-3">
                    <input
                        className="form-control rounded"
                        placeholder="Search"
                        type="search"
                    />
                    <span
                        className="input-group-text border-0"
                        id="search-addon"
                    >
        <MDBIcon fas icon="search"/>
        </span>
                </MDBInputGroup>


                <MDBTypography listUnStyled className="mb-0">
                    {
                        chatList.map((chat, idx) => {
                            return (
                                <ListFragment chat = {chat} key = {idx}/>
                            )
                        })

                    }
                </MDBTypography>
            </div>
        </MDBCol>
    );
}
export default List