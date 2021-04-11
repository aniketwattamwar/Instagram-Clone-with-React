import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Stories.css';

function Stories({username,profile_url}) {
    return (
        // <div className="stories">
             
        <div className="stories_h">
            <Avatar className="story_avatar"
            alt="Remy Sharp" src={profile_url} />
            <h4 className="story_username">{username}</h4>
            
        </div>

        // </div>
    )
}

export default Stories
