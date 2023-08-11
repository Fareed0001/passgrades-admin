import React from "react";

const MessageCard = ({ title, content }) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h6 class="card-title"> {title} </h6>
                    <p class="card-text"> {content} </p>
                </div>
            </div>
        </div>
    );
};

export default MessageCard;