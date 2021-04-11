import logo from './logo.svg';
import './App.css';
import Post from './Post.js'
import React, { useState } from "react"
import Stories from './Stories.js'
import StoryBody from './StoryBody';
import HomeIcon from '@material-ui/icons/Home';
import SmsIcon from '@material-ui/icons/Sms';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inbox from './Inbox';
import Header from './Header';
// import HouseIcon from '@material-ui/icons/House';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function App() {

  // Stories data
  // const [stories,setStories] = useState([

  //   {
  //     username: "Aniket",
  //     profile_url: "https://lh3.googleusercontent.com/ogw/ADGmqu--n8J1flFkCC6KRQE1XUM1dJow2nSD0wHrqdxNXQ=s83-c-mo"
  //   },

  //   {
  //     username: "Aniket",
  //     profile_url: "https://lh3.googleusercontent.com/ogw/ADGmqu--n8J1flFkCC6KRQE1XUM1dJow2nSD0wHrqdxNXQ=s83-c-mo"
  //   },
  //   {
  //     username: "Aniket",
  //     profile_url: "https://lh3.googleusercontent.com/ogw/ADGmqu--n8J1flFkCC6KRQE1XUM1dJow2nSD0wHrqdxNXQ=s83-c-mo"
  //   },


  // ])



  // Posts data
  const [posts,setPosts] = useState([
    {
      username: "__.jerrry.__" ,
      caption: "Golden Retriever Dog" ,
      image_url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors-500x486.jpg",

    },
    {
      username: "designflow" ,
      caption: "Golden Retriever Dog" ,
      image_url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors-500x486.jpg",

    },
    {
      username: "hackershrine" ,
      caption: "Golden Retriever Dog" ,
      image_url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors-500x486.jpg",

    }

  ]) 

  return (
    <Router>
    <div className="App">
     
           <Switch>
               <Route path="/">
                  <Header/>
                  <StoryBody/>

                  {
            posts.map(post => (
              <Post username={post.username}
              caption={post.caption}
              image_url = {post.image_url}
              
              />
            ))
          }
        </Route>
               <Route path='/inbox'>
            
                 <Header/>
                 <h3>testinggggg</h3>
                 {/* <Inbox username="__.jerry.__"/> */}
               </Route>

          <Route path="/feed">
            <h2>In feed</h2>
          </Route>
           </Switch>
       
    
    
    
    {/* {
      stories.map(story => (
        <Stories username={story.username}
        
        profile_url = {story.profile_url}
        
        />
      ))
    } */}
   
    </div>
    </Router>
  );
}

export default App;
