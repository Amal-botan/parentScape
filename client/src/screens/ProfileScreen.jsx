import React from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import UserProfile from "../components/UserProfile";
import ProfileChildren from "../components/ProfileChildren";
import "../components/ProfileChildren.css";
import "../components/styleParentFeed.css";
import "../components/Post.css";
import "../components/PostForm.css";
import "../components/UserProfile.css";

import axios from "axios";
import { useState, useEffect } from "react";
import PostProfile from "../components/PostProfile";

const ProfileScreen = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const postsUrl = "http://localhost:8080/api/posts" ; //use path and set proxy
    //runs when page loads
    axios.get(postsUrl, config).then((response) => {
      setPosts(response.data.posts);
    });
  }, []);

  console.log("Post state: ", posts);

  useEffect(() => {
    const loggedinuser = JSON.parse(localStorage.getItem('user'))
   {loggedinuser ? setUser(loggedinuser) : setUser(null)}
   {loggedinuser ? setToken(loggedinuser.token)  : setToken(null)}

  }, []);

  const config = { headers: { Authorization: `Bearer ${token}`, }, }      

  const addPost = (post) => {

    axios.post("http://localhost:8080/api/newposts", post, config)
      .then((res) => {

        setPosts((prev) => ([res.data, ...prev]))

      })
  }

  // useEffect(() => {
  //   const postsUrl = "http://localhost:8080/api/posts" //use path and set proxy
  //   //runs when page loads
  //   // axios.get(postsUrl)
  //   //   .then((response) => {
  //   //     setPosts(response.data.posts)
  //   //   })
  // }, [posts])

  const editPost = (post, post_id) => {
    axios
      .post(`http://localhost:8080/api/editpost/${post_id}`, post)
      .then((res) => {
        setPosts([...posts, res.data.posts[0]]);
        setPostText("");
      })
      .then((res) => {
        const postsUrl = "http://localhost:8080/api/posts"; //use path and set proxy
        //runs when page loads
        axios.get(postsUrl).then((response) => {
          setPosts(response.data.posts);
        });
      });
  };
  // for log out make a button to log out user localStorage.removeItem("user")

  return (
    <div className="parent">
      <div className="left-side">
      {user ?  <UserProfile user={user} /> : <p>U need to be logged in or signed up</p>}
      </div>

      <div className="right-side">
      {/* {user ?  <PostProfile posts={posts} user={user}/> : <div></div> } */}
      <PostForm addPost={addPost} />
      <PostProfile posts={posts} editPost={editPost} postText={postText} setPostText={setPostText} user={user} />
      
      </div>
    </div>
  );
};

export default ProfileScreen;
