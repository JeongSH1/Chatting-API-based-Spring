import React, {useState} from 'react';
import {Button, Col, Form, Navbar, Row} from "react-bootstrap";
import "../../css/chat.css"
import ChatContent from "./ChatContent";
import axios from "axios";
import Container from "react-bootstrap/Container";
const Chat = (props) => {
    const chatData = {
        'sender': "",
        'receiver': "",
        'content': "",
        'date': "",
    }
    const [content, setContent] = useState("");
    const handleContentChange = e => {
        setContent(e.target.value);
        console.log(content);
    }
    const handleSend = async (e) => {
        chatData.sender = "";
        chatData.receiver = "";
        chatData.content = content;
        chatData.date = new Date();

        e.preventDefault();
        await axios({
            method: "POST",
            url: `/sendMessage`,
            headers: {
                "Content-Type": "application/json",
            },
            data: chatData,
            withCredentials:true,
        }).then(response => console.log(response))
        console.log (chatData);
    };

    return (
            <div className="chat">
                <div className="chat_header">
                    <Navbar bg="light" expand="lg">
                        <Container className="d-flex justify-content-center">
                            <Navbar.Brand href="#home">
                                <span>{"None"}</span>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>


                <div className="chat_content">
                    <ChatContent/>
                </div>

                <div className="input">
                    <Form className="input_form" onSubmit={handleSend}>
                            <div className="input_text">
                                <Form.Group as={Row} className="mb-3" controlId="content" onChange={handleContentChange}>
                                    <Col sm>
                                        <Form.Control type="text" placeholder="Send Message..." />
                                    </Col>
                                </Form.Group>
                            </div>
                            <div className="d-grid gap-1">
                                <Button variant="secondary" type="submit">
                                    Send
                                </Button>
                            </div>
                    </Form>
                </div>
            </div>


    )
}

export default Chat