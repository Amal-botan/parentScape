import React from "react";

export default function PostForm() {
  const posts = "What is on your mind?"
  return (
    <main className="container">
        <textarea className="form__textarea" name="text" placeholder={posts}></textarea>
        <input type="submit" value="Post" className="form__input" />
    </main>
  );
}
