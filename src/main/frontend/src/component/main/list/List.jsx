import React from "react";
import {MDBCol, MDBIcon, MDBInputGroup, MDBTypography} from "mdb-react-ui-kit";
import ListFragment from "./ListFragment";
import axios from "axios";

const List = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
    const load = async () => {

        await axios({
            method: "POST",
            url: "/load",
            headers: {
                "Content-Type" : "application/json",
            },
            data: token,
            withCredentials: true,
        });

    }
    load();
    return (
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
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