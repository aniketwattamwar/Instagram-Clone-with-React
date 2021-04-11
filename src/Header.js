import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SmsIcon from '@material-ui/icons/Sms';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import { spacing } from '@material-ui/system';
import './Header.css';

function Header() {
 
    return (
      
    <div className="header">
        <img 
        className="instagram_name"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
    
        <div className="search_bar">
            <input className="search_text" type="text" placeholder="Search" /> 
        </div>
        
      <div className="app_icons">
        
         <HomeIcon className="m_icon"  />
        
         <Link to='/inbox'>
          <SmsIcon className="m_icon"/>
          </Link>
          <Link to='/feed'>
          <ExploreOutlinedIcon className="m_icon"/>
          </Link>
          <FavoriteBorderIcon className="m_icon"/>
          <Avatar className="header_profile"
          alt="Aniket Profile" src="https://yt3.ggpht.com/yti/ANoDKi7dpofYZI55XDxA5F6XeXl7Gz3-JsMWo4Ml82BtVg=s108-c-k-c0x00ffffff-no-rj" />
      
        
        </div>
    </div>
    )
}

export default Header




