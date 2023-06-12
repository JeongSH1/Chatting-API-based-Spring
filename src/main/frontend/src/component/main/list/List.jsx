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
    const [members, setMembers] = useState([]);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const loadChatList = async () => {

        await axios({
            method: "POST",
            url: "/load/list",
            headers: {
                "Content-Type" : "application/json",
            },
            data: token,
            withCredentials: true,
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
        loadChatList();
    }, [])

    return (
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
            {visible ?  <MemberList /> : null}

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

                    {/*<li className="p-2 border-bottom">*/}
                    {/*    <a*/}
                    {/*        href="#!"*/}
                    {/*        className="d-flex justify-content-between"*/}
                    {/*    >*/}
                    {/*        <div class="d-flex flex-row">*/}
                    {/*            <div>*/}
                    {/*                <img*/}
                    {/*                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"*/}
                    {/*                    alt="avatar"*/}
                    {/*                    className="d-flex align-self-center me-3"*/}
                    {/*                    width="60"*/}
                    {/*                />*/}
                    {/*                <span className="badge bg-warning badge-dot"></span>*/}
                    {/*            </div>*/}
                    {/*            <div className="pt-1">*/}
                    {/*                <p className="fw-bold mb-0">Alexa Chung</p>*/}
                    {/*                <p className="small text-muted">*/}
                    {/*                    Lorem ipsum dolor sit.*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="pt-1">*/}
                    {/*            <p className="small text-muted mb-1">*/}
                    {/*                5 mins ago*/}
                    {/*            </p>*/}
                    {/*            <span className="badge bg-danger rounded-pill float-end">*/}
                    {/*            2*/}
                    {/*          </span>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li className="p-2 border-bottom">*/}
                    {/*    <a*/}
                    {/*        href="#!"*/}
                    {/*        className="d-flex justify-content-between"*/}
                    {/*    >*/}
                    {/*        <div className="d-flex flex-row">*/}
                    {/*            <div>*/}
                    {/*                <img*/}
                    {/*                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"*/}
                    {/*                    alt="avatar"*/}
                    {/*                    className="d-flex align-self-center me-3"*/}
                    {/*                    width="60"*/}
                    {/*                />*/}
                    {/*                <span className="badge bg-success badge-dot"></span>*/}
                    {/*            </div>*/}
                    {/*            <div className="pt-1">*/}
                    {/*                <p className="fw-bold mb-0">Danny McChain</p>*/}
                    {/*                <p className="small text-muted">*/}
                    {/*                    Lorem ipsum dolor sit.*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="pt-1">*/}
                    {/*            <p className="small text-muted mb-1">Yesterday</p>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li className="p-2 border-bottom">*/}
                    {/*    <a*/}
                    {/*        href="#!"*/}
                    {/*        className="d-flex justify-content-between"*/}
                    {/*    >*/}
                    {/*        <div className="d-flex flex-row">*/}
                    {/*            <div>*/}
                    {/*                <img*/}
                    {/*                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"*/}
                    {/*                    alt="avatar"*/}
                    {/*                    className="d-flex align-self-center me-3"*/}
                    {/*                    width="60"*/}
                    {/*                />*/}
                    {/*                <span className="badge bg-danger badge-dot"></span>*/}
                    {/*            </div>*/}
                    {/*            <div className="pt-1">*/}
                    {/*                <p className="fw-bold mb-0">Ashley Olsen</p>*/}
                    {/*                <p className="small text-muted">*/}
                    {/*                    Lorem ipsum dolor sit.*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="pt-1">*/}
                    {/*            <p className="small text-muted mb-1">Yesterday</p>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li className="p-2 border-bottom">*/}
                    {/*    <a*/}
                    {/*        href="#!"*/}
                    {/*        className="d-flex justify-content-between"*/}
                    {/*    >*/}
                    {/*        <div className="d-flex flex-row">*/}
                    {/*            <div>*/}
                    {/*                <img*/}
                    {/*                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"*/}
                    {/*                    alt="avatar"*/}
                    {/*                    className="d-flex align-self-center me-3"*/}
                    {/*                    width="60"*/}
                    {/*                />*/}
                    {/*                <span className="badge bg-warning badge-dot"></span>*/}
                    {/*            </div>*/}
                    {/*            <div className="pt-1">*/}
                    {/*                <p className="fw-bold mb-0">Kate Moss</p>*/}
                    {/*                <p className="small text-muted">*/}
                    {/*                    Lorem ipsum dolor sit.*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="pt-1">*/}
                    {/*            <p className="small text-muted mb-1">Yesterday</p>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li className="p-2">*/}
                    {/*    <a*/}
                    {/*        href="#!"*/}
                    {/*        className="d-flex justify-content-between"*/}
                    {/*    >*/}
                    {/*        <div class="d-flex flex-row">*/}
                    {/*            <div>*/}
                    {/*                <img*/}
                    {/*                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"*/}
                    {/*                    alt="avatar"*/}
                    {/*                    className="d-flex align-self-center me-3"*/}
                    {/*                    width="60"*/}
                    {/*                />*/}
                    {/*                <span className="badge bg-success badge-dot"></span>*/}
                    {/*            </div>*/}
                    {/*            <div className="pt-1">*/}
                    {/*                <p className="fw-bold mb-0">Ben Smith</p>*/}
                    {/*                <p className="small text-muted">*/}
                    {/*                    Lorem ipsum dolor sit.*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="pt-1">*/}
                    {/*            <p className="small text-muted mb-1">Yesterday</p>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}
                    {/*</li>*/}

                    <ListFragment/>
                </MDBTypography>
            </div>
        </MDBCol>
    );
}
export default List