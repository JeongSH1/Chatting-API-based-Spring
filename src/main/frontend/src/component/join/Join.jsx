import React, {useState} from 'react';
import "./join.css";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

const Join = () => {

    const formData = new FormData();
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const onNicknameChange = (e) => {
        setNickname(e.target.value);
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e) => {
        formData.append("email", email);
        formData.append("password", password);
        formData.append("nickname", nickname);
        e.preventDefault();
        await axios({
            method: "POST",
            url: `/join`,
            headers: {
                "Content-Type": "application/json",
            },
            data: formData,
            withCredentials:true,
        }).then(response => {
            setModalContent("회원가입 완료")
            setModalShow(true);
        }).catch((response) => {
            setModalContent("이미 존재하는 회원입니다.");
            setModalShow(true);
        })
    };
    return (
        <div className="Auth-form-container">

            <Modal
                size="sm"
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    window.location.href = "/login"

                }
            }
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        알림
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalContent}</Modal.Body>
            </Modal>


            <form className="Auth-form" onSubmit={onSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Join In</h3>
                    <div className="form-group mt-3">
                        <label>Nickname</label>
                        <input
                            type="name"
                            className="form-control mt-1"
                            placeholder="Enter nickname"
                            onChange={onNicknameChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            required
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            required
                            onChange={onPasswordChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Join;