import React, {useEffect, useState} from "react";
import {Button, Form, ListGroup} from "react-bootstrap";
import axios from "axios";


const MemberList = () => {


    const loadMembers = async () => {
        await axios({
            method: "POST",
            url: "/load/members",
            headers: {
                "Content-Type" : "application/json",
            },
            data: localStorage.getItem("token"),
            withCredentials: true,
        }).then(response => {
            setMembers(response.data.data);
            console.log(members)
        })
    }

    const createRoom = async () => {
        await axios({
            method: "POST",
            url: "/chat/create",
            headers: {
                "Content-Type": "application/json",
            },
            data: selectedMembers,
            withCredentials: true,
        }).then(response => {
            setMembers(response.data.data);
            console.log(members)
        })
    }
    const formData = new FormData();
    const [members, setMembers] = useState([])
    const [selectedMembers, setSelectedMembers] = useState([])

    useEffect(() => {
        loadMembers().then(r => console.log(r));
    }, [])

    return (
        <div className="member_list">
            <ListGroup>
                <Form>
                {
                    members.map((member, idx) => {
                        return (
                        <ListGroup.Item key={idx}>
                            <Form.Check aria-label="option 1" className="me-2 d-inline" onChange={}/>
                            {member.name}
                        </ListGroup.Item>)
                    })
                }
                    <Button type="submit" variant="primary" onSubmit={createRoom}>Create</Button>{' '}
                </Form>
            </ListGroup>
        </div>
    )
}

export default MemberList;