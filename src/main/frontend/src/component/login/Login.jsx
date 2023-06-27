import React, {useContext, useRef, useState} from 'react';
import "./login.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";

const Login = (props) => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const from = "/main"

    const formData = new FormData();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e) => {
        formData.append("email", email);
        formData.append("password", password);
        e.preventDefault();

        await axios({
            method: "POST",
            url: `/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: formData,
            withCredentials:true,
        }).then(response => {
            setModalContent("로그인 성공");
            setModalShow(true);
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;
            setAuth({email, password, accessToken, refreshToken});
            setEmail('');
            setPassword('');
            navigate(from, {replace: true});

        }).catch(response => {
            if (response.response.status === 500) {
                setModalContent("응답이 없습니다.");
            } else {
                const message = response.response.data.message;
                setModalContent(message);
            }
            setModalShow(true);
        })
    };

    return (
        <div className="Auth-form-container">

            <Modal
                size="sm"
                show={modalShow}
                onHide={() => setModalShow(false)}
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
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={onPasswordChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="join text-right mt-2">
                        <a href="/join">Join</a>
                    </p>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;