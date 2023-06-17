import React, {useEffect, useState} from "react";
import {Button, Form, ListGroup} from "react-bootstrap";
import axios from "axios";


const MemberList = () => {

    const [members, setMembers] = useState([])
    const [selectedMembers, setSelectedMembers] = useState([])
    const formData = new FormData();
    const token = localStorage.getItem("token")

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
            setMembers(response.data);
        })
    }

    const createRoom = async (e) => {
        e.preventDefault();
        await axios({
            method: "POST",
            url: "/chat/create",
            headers: {
                "Content-Type": "application/json",
            },
            data: formData,
            withCredentials: true,
        }).then(response => {
            console.log(response);
            alert(response);
        })
    }

    const onChange = (e) => {
        e.target.checked ? setSelectedMembers([...selectedMembers, e.target.value])
            :setSelectedMembers(selectedMembers.filter(m => m !== e.target.value))
    }

    useEffect(() => {
        console.log(members);
        loadMembers()
    }, [])
    return (
        <div className="member_list">
            <ListGroup>
                <Form onSubmit={createRoom}>
                {
                    members.map((member, idx) => {
                        return (
                        <ListGroup.Item key={idx}>
                            <Form.Check aria-label="option 1" className="me-2 d-inline" value={member.id} onClick={onChange}/>
                            {member.nickname}
                        </ListGroup.Item>)
                    })
                }
                    <Button type="submit" variant="primary" >Create</Button>{' '}
                </Form>
            </ListGroup>
        </div>
    )
}

export default MemberList;