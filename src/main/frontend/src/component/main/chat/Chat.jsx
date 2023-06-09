import {MDBCol, MDBIcon} from "mdb-react-ui-kit";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import axios from "axios";

const Chat = (props) => {
    const token = localStorage.getItem("token");
    const loadContents = async () => {
        await axios({
            method: "POST",
            url: `/load/contents`,
            headers: {
                "Content-Type" : "application/json",
            },
            data: props.target.target,
            withCredentials: true,
        }).then((response)=> {
            console.log(response);
        }).catch(()=> {
                console.log(props.target.target)
            }
        )
    }

    useEffect(()=> {
        loadContents().then();
    })

    return (
        <MDBCol md="6" lg="7" xl="8">
            <div className="d-flex flex-row justify-content-start">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
                <div>
                    <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                        12:00 PM | Aug 13
                    </p>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-end">
                <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted">
                        12:00 PM | Aug 13
                    </p>
                </div>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
            </div>

            <div className="d-flex flex-row justify-content-start">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
                <div>
                    <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                    >
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                        12:00 PM | Aug 13
                    </p>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-end">
                <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted">
                        12:00 PM | Aug 13
                    </p>
                </div>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
            </div>

            <div className="d-flex flex-row justify-content-start">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
                <div>
                    <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                        12:00 PM | Aug 13
                    </p>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-end">
                <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi
                        nesciunt.
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted">
                        12:00 PM | Aug 13
                    </p>
                </div>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
            </div>

            <div className="d-flex flex-row justify-content-start">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
                <div>
                    <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                    >
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem.
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                        12:00 PM | Aug 13
                    </p>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-end">
                <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid ex
                        ea commodi consequatur?
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted">
                        12:00 PM | Aug 13
                    </p>
                </div>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
            </div>
            <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 3"
                    style={{ width: "40px", height: "100%" }}
                />
                <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleFormControlInput2"
                    placeholder="Type message"
                />
                <a className="ms-1 text-muted" href="#!">
                    <MDBIcon fas icon="paperclip" />
                </a>
                <a className="ms-3 text-muted" href="#!">
                    <MDBIcon fas icon="smile" />
                </a>
                <a className="ms-3" href="#!">
                    <MDBIcon fas icon="paper-plane" />
                </a>
            </div>
        </MDBCol>
    );
}

export default Chat

