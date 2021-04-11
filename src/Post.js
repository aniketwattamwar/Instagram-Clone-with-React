import React from 'react'
import './Post.css';
 
 
import SmsIcon from '@material-ui/icons/Sms';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar'
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export default function Post({username, caption, image_url}) {
    return (
    <div className="post">
        <div className="post_header">
            <Avatar className="post_avatar"
            alt="Remy Sharp" src="https://lh3.googleusercontent.com/ogw/ADGmqu--n8J1flFkCC6KRQE1XUM1dJow2nSD0wHrqdxNXQ=s83-c-mo" />
            <h3>{username}</h3>
            
        </div>

        
        <img className="post_image" src={image_url}></img>
            <FavoriteBorderIcon className="mm_icon"/>
            <SmsIcon className="mm_icon"/>
            <NearMeOutlinedIcon className="mm_icon"/>
            <BookmarkBorderIcon className="mm_icon"/>
            <h4 className="post_caption"> <strong>{username}</strong> {caption}</h4>
        </div>
    )
}
