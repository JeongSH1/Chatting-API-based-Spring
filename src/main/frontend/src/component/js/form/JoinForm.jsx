import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import "../../css/joinform.css";
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import {UserContext} from "../Main";

const JoinForm = (props) => {
    const formData = new FormData();
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = async (e) => {
        formData.append("name", name);
        e.preventDefault();
        alert(`${name}`);

        await axios({
                method: "POST",
                url: `/join`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: formData,
                withCredentials:true,
            }).then(response => {
                console.log(response);
                props.setUserId(response.data);
                props.setUserName(name);
            })
        window.location.href = "/main"

    };


    return (
        <div className="wrap">
            <Container className="panel">
                <div className = "form">
                    <Form onSubmit={handleSubmit} >
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" onChange={handleChange}>
                            <Col sm>
                                <Form.Control type="text" placeholder="UserName" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Control type="password" placeholder="Password" disabled/>
                            </Col>
                        </Form.Group>
                        <br/>

                        <div className="d-grid gap-1">
                            <Button variant="secondary" type="submit">
                                Sign In
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default JoinForm