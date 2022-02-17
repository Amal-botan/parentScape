import React from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import PostUser from "../components/PostUser";
import ProfileChildren from "../components/ProfileChildren";
import "../components/ProfileChildren.css";
import "../components/styleParentFeed.css";
import "../components/Post.css";
import "../components/PostForm.css";
import "../components/PostUser.css";

import axios from "axios";
import { useState, useEffect } from "react";

const ProfileScreen = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [user, setUser] = useState({})
  useEffect(() => {
    const postsUrl = "http://localhost:8080/api/posts"; //use path and set proxy
    //runs when page loads
    axios.get(postsUrl).then((response) => {
      setPosts(response.data.posts);
    });
  }, []);

  console.log("Post state: ", posts);

  useEffect(() => {
    const loggedinuser = JSON.parse(localStorage.getItem('user'))
   {loggedinuser ? setUser(loggedinuser) : setUser(null)}

  }, []);

  // const addPost = (post) => {

  //   axios.post("http://localhost:8080/api/newposts", post)
  //     .then((res) => {

  //       setPosts((prev) => ([res.data, ...prev]))

  //     })
  // }

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
      {user ?  <PostUser /> : <p>U need to be logged in or signed up</p>}
      </div>

      <div className="right-side">
      {user ?  <Post posts={posts} /> : <div></div> }
      </div>
    </div>
  );
};

export default ProfileScreen;
