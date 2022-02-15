import React from "react";
import "./PostForm.css"
export default function PostForm() {
  const posts = "What is on your mind?"
  return (
    <main className="container">
        <textarea className="form__textarea" name="text" placeholder={posts}></textarea>
        <div id="buttons">
        <input type="submit" value="Post" className="form__input" />
        <input type="submit" value="Add Category" className="form__input" />
        <input type="submit" value="Add Image" className="form__input" />
        </div>
    </main>
  );
}
