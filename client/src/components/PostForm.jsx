import React from "react";
import "./PostForm.css"
import { useState, useEffect } from "react";

export default function PostForm(props) {
  const [postText, setPostText] = useState("")
  
  const handleSubmit = () => {
    const post = {post_text: postText}
    console.log(post)
    props.addPost(post)
  }

  return (
    <main className="container">
        <textarea className="form__textarea" name="text" placeholder="What is on your mind?" value={ postText } onChange={(event) => setPostText(event.target.value)} ></textarea>
        <div id="buttons">
        <input type="submit" value="Post" className="form__input" onClick={ handleSubmit } />
        <input type="submit" value="Add Category" className="form__input" />
        <input type="submit" value="Add Image" className="form__input" />
        </div>
    </main>
  );
}
