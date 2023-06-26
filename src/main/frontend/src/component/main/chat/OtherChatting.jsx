import React from 'react';

const OtherChatting = (props) => {

    return (
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
    )
}

export default OtherChatting