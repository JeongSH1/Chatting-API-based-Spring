import React, {useEffect, useState} from "react";
import {Button, Form, ListGroup} from "react-bootstrap";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {changeTarget} from "../../redux/Store";


const MemberList = (props) => {

    const [members, setMembers] = useState([])
    const [selectedMembers, setSelectedMembers] = useState([])
    const token = localStorage.getItem("token")
    const dispatch = useDispatch();

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
        }).catch(()=> {
            console.log(localStorage.getItem("token"))
        })
    }

    const createRoom = async (e) => {
        e.preventDefault();

        await axios({
            method: "POST",
            url: "/authenticate",
            headers: {
                "Content-Type": "application/json",
            },
            data: token,
            withCredentials: true,
        }).then(async () => {
            await axios({
                method: "POST",
                url: "/chat/create",
                headers: {
                    "Content-Type": "application/json",
                },
                data: selectedMembers,
                withCredentials: true,
            }).then(response => {
                props.setRefresh(true);
                dispatch(changeTarget(response.data));
            }).catch((error) => {
                alert("error: create")
            })

        }).catch(()=>{
            alert("auth error: memberlist");
        })

    }

    const onChange = (e) => {
        e.target.checked ? setSelectedMembers([...selectedMembers, e.target.value])
            :setSelectedMembers(selectedMembers.filter(m => m !== e.target.value))
    }

    useEffect(() => {
        loadMembers().then();
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