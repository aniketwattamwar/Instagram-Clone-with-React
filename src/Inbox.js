import React from 'react'
import './inbox.css';

function Inbox({username}) {
    return (
        <div className="inbox">
            <div className="chats">
                <div className="chat_bar">
                    <h1>Testing</h1>
                    <h5>{username}</h5>
                </div>
            </div>
            
        </div>
    )
}

export default Inbox
