import React from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import PostUser from "../components/PostUser";
import PostCategory from "../components/PostCategory";
import DailyQuote from "../components/DailyQuote";
import "../components/styleParentFeed.css";
import "../components/Post.css";
import "../components/PostForm.css";
import "../components/PostUser.css";

import axios from "axios";
import { useState, useEffect } from "react";

const ParentFeedScreen = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const postsUrl = "http://localhost:8080/api/posts"; //use path and set proxy
    //runs when page loads
    axios.get(postsUrl).then((response) => {
      setPosts(response.data.posts);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/category").then((response) => {
      console.log(response);
      setCategories(response.data.categories);
    });
  }, []);

  console.log("Categories: ", categories);

  const addPost = (post) => {
    axios.post("http://localhost:8080/api/newposts", post).then((res) => {
      setPosts((prev) => [res.data, ...prev]);
    });
  };

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

  // const categoryPosts = (category) => {
  //   axios.post(`http://localhost:8080/api/category`, category)
  //     .then((res) => {

  //     })
  // }

  return (
    <div className="parent">
      <div className="left-side">
        <PostUser />

        <PostCategory categories={categories} />
      </div>

      <div className="right-side">
        <PostForm addPost={addPost} />
        <Post
          posts={posts}
          editPost={editPost}
          postText={postText}
          setPostText={setPostText}
        />
      </div>
    </div>
  );
};

export default ParentFeedScreen;
