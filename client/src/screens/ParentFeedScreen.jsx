import React from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import UserProfile from "../components/UserProfile";
import PostCategory from "../components/PostCategory";
import DailyQuote from "../components/DailyQuote";
import "../components/styleParentFeed.css";
import "../components/Post.css";
import "../components/PostForm.css";
import "../components/UserProfile.css"

import axios from "axios";
import { useState, useEffect } from "react";

const ParentFeedScreen = () => {
  const [posts, setPosts] = useState([])
  const [postText, setPostText] = useState("")
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState("")
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [comments_text, setCommentsText] = useState("");

  const getPosts = () => {
  const postsUrl = "http://localhost:8080/api/posts" //use path and set proxy
  //runs when page loads
  axios.get(postsUrl)
    .then((response) => {
      setPosts(response.data.posts)
    })
}

const addComment = (comment, post_id) => {

  axios.post(`http://localhost:8080/api/newcomment/${post_id}`, comment, config)
    .then((res) => {
      console.log("Add comment data: ", res.data.comment)
      //  setComments((prev) => ([...prev, res.data.comment]))
      getPosts();
    })
  }


  useEffect(() => {
    getPosts();
    
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8080/api/category")
      .then((response) => {
        console.log(response);
        setCategories(response.data.categories);
      })
  }, [])

  console.log("Categories: ", categories);


  useEffect(() => {
    const loggedinuser = JSON.parse(localStorage.getItem('user'))
   {loggedinuser ? setUser(loggedinuser)  : setUser(null)}
   {loggedinuser ? setToken(loggedinuser.token)  : setToken(null)}
   
  }, []);

   const config = { headers: { Authorization: `Bearer ${token}`, }, }      
  // const res = await axios.post(`https://loobv.com/api/traveller/add/favorite/car`, { car_id: carId }, config)


  const addPost = (post) => {

    axios.post("http://localhost:8080/api/newposts", post, config)
      .then((res) => {
        console.log("Add post data: ", res.data)
        setPosts((prev) => ([res.data, ...prev]))
        setCategories((prev) => ([...prev, res.data]))
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

    axios.post(`http://localhost:8080/api/editpost/${post_id}`, post)
      .then((res) => {
        setPosts([...posts, res.data.posts[0]]);
        setPostText("")
      })
      .then((res) => {
        const postsUrl = "http://localhost:8080/api/posts" //use path and set proxy
        //runs when page loads
        axios.get(postsUrl)
          .then((response) => {
            setPosts(response.data.posts)
          })
      })
  }

  const categoryPicked = (category) => {

    console.log("Categories from function: ", category)
    axios.post(`http://localhost:8080/api/category/post`, category)
      .then((res) => {
        console.log("checking res: ", res)
        // setPosts(response.data.posts)
      })
  }


  return (

    <div className="parent">

      <div className="left-side">
       {token ? <UserProfile user={user}/> : "WELCOME VISITOR"}

        <PostCategory categoryPicked={categoryPicked} category={category} setCategory={setCategory} categories={categories} />
      </div>

      <div className="right-side">
        <PostForm addPost={addPost} />
        <Post addComment={addComment} setComments={setComments} posts={posts} editPost={editPost} postText={postText} setPostText={setPostText} user={user} category={category} comments_text={comments_text} setCommentsText={setCommentsText} comments={comments}/>
      </div>


    </div>


  )
}

export default ParentFeedScreen;