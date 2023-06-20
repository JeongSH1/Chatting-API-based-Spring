import React, {useEffect, useState} from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";
import List from "./list/List";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Chat from "./chat/Chat";

const Main = (props) => {
    const navigate = useNavigate();
    return (
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "#CDC4F9" }}>
            <MDBRow>
                <MDBCol md="12">
                    <MDBCard id="chat3" style={{ borderRadius: "15px" }}>
                        <MDBCardBody>
                            <MDBRow>
                                {props.authenticated ? <List/> : null}
                                <Chat/>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default Main;