import React from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm"
import "../components/Post.css";
import "../components/PostForm.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ParentFeedScreen = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postsUrl = "http://localhost:8080/api/posts" //use path and set proxy
    //runs when page loads
    axios.get(postsUrl)
      .then((response) => {
        console.log("from axios data: ", response.data)
        setPosts(response.data.posts)
      })
  }, [])

  console.log("Post state: ", posts);

  const addPost = (post) => {

    axios.post("http://localhost:8080/api/newposts", post)
      .then((res) => {
        setPosts((prev) => ([res.data,...prev]))

      })
  }


  return (
    <>
      <PostForm addPost = { addPost }/>
      <Post posts={posts} />

      <p>Hello</p>

    </>


  )
}

export default ParentFeedScreen;