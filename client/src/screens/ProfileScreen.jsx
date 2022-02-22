import React from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import UserProfile from "../components/UserProfile";
import ProfileChildren from "../components/ProfileChildren";
import BabySitterBookings from "../components/BabySitterBookings"

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
  const [babysitter, setBabysitter] = useState({});
  const [babySitters, setBabySitters] = useState([])
  const [bookings, setBookings] = useState([]);


  useEffect(() => {
    const postsUrl = "http://localhost:8080/api/posts" ; //use path and set proxy
    //runs when page loads
    axios.get(postsUrl).then((response) => {
      setPosts(response.data.posts);
    });
  }, []);

  console.log("Post state: ", posts);

  useEffect(() => {
    const loggedinuser = JSON.parse(localStorage.getItem('user'))
   {loggedinuser ? setUser(loggedinuser) : setUser(null)}
   {loggedinuser ? setToken(loggedinuser.token)  : setToken(null)}

   const loggedinBabysitter = JSON.parse(localStorage.getItem('babysitter'))
 {loggedinBabysitter ? setBabysitter(loggedinBabysitter) : setBabysitter(null)}
 {loggedinBabysitter ? setToken(loggedinBabysitter.token)  : setToken(null)}

  }, []);

  const config = { headers: { Authorization: `Bearer ${token}`, }, }      

  const addPost = (post) => {

    axios.post("http://localhost:8080/api/newposts", post, config)
      .then((res) => {

        setPosts((prev) => ([res.data, ...prev]))

      })
  }

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

  const getBookings = () => {
    const bookingURL = "http://localhost:8080/api/babysitter/booking" ; //use path and set proxy
    //runs when page loads
    axios.get(bookingURL).then((response) => {
      setBookings(response.data.bookings);
    });
  }

 
  useEffect(() => {
    getBookings();
  }, []);

  console.log("Bookings: ", {bookings})
   
const changeBooking = (booking_status, id) => {
  const setBookingURL = `http://localhost:8080/api/bookingstatus/${id}` ; //use path and set proxy
  //runs when page loads
  axios.post(setBookingURL, booking_status).then((response) => {
    console.log(response.data.bookings)
    getBookings();
  });
}

  return (
    <div className="parent">
      <div className="left-side">
        <UserProfile user={user} babysitter={babysitter} /> 
        <BabySitterBookings changeBooking={changeBooking} bookings={bookings} babysitter={babysitter} user={user} />

      </div>


      <div className="right-side">
      {/* {user ?  <PostProfile posts={posts} user={user}/> : <div></div> } */}
    { user? <PostForm addPost={addPost} /> : <div></div>}

      {user ? <PostProfile posts={posts} editPost={editPost} postText={postText} setPostText={setPostText} user={user} /> : <div></div>}
      
      </div>
    </div>
  );
};

export default ProfileScreen;
