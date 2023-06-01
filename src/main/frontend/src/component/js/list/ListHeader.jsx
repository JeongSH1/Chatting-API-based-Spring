import React, {useEffect, useState} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const ListHeader = () => {
    const[userList, setUserList] = useState([]);
    useEffect(()=>{
        fetch("/getUserList")
            .then((res)=>{
                return res.json();
            })
            .then((data)=> {
                setUserList(data);
            })
    }, []);

    return (
        <Navbar bg="light" expand="lg">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand href="#home">
                    <span>Direct</span>
                </Navbar.Brand>
                <NavDropdown title="" id="basic-nav-dropdown">
                    {
                        userList.map( (user, idx) => {
                            return ( <div key={idx}>
                                    <NavDropdown.Item> {user.name}</NavDropdown.Item>
                                </div>
                            )
                        })
                    }
                </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default ListHeader