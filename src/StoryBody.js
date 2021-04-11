import React from 'react'
import './StoryBody.css';
import Stories from './Stories.js';
import { useState } from "react"

function StoryBody() {

    const [stories,setStories] = useState([

        {
          username: "Your Story",
          profile_url: "https://lh3.googleusercontent.com/ogw/ADGmqu--n8J1flFkCC6KRQE1XUM1dJow2nSD0wHrqdxNXQ=s83-c-mo"
        },
    
        {
          username: "designflow",
          profile_url: "https://yt3.ggpht.com/ytc/AAUvwnivBjQ1ucJIAO8U_Kk3NGHEBaXZIsB4TtKevEJB=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        {
          username: "HackerShrine",
          profile_url: "https://yt3.ggpht.com/ytc/AAUvwnjel8LI71Sj8Gd2v3n7OPWRkQQkg66pE2kp6R4m=s88-c-k-c0x00ffffff-no-rj"
        },
    
    
      ])

    return (
        <div className="story_body">
             {
      stories.map(story => (
        <Stories username={story.username}
        
        profile_url = {story.profile_url}
        
        />
      ))
    }
        </div>
    )
}

export default StoryBody
