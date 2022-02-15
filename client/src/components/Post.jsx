import React from "react";
const posts = {
user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSN0LzT35OFBzyTtlHIl876rIsAcWWen9nA&usqp=CAU",
username: "steph.bob",
post_id: 1,
post_text: "Hello everyone! I'm a first time dad. What is your number one advice?",
post_created_at: "2022-02-14T23:50:21.658Z",
}
export default function Post() {
  return (
    <article className="post">
    <header className="post--header">
      <img className="post--user_image" src={posts.user_image} alt=""/>
      <h2 className="tweet--username">{posts.username}</h2>
    </header>

    <div className="post--text">
      <p>{posts.post_text}</p>
    </div>

    <footer className="tweet--footer">
      <small className="footer--created_at">{posts.post_created_at}<small>
          <span className="footer--actions">
            <a href="#"><i className="fa fa-flag"></i></a>
            <a href="#"><i className="fa fa-retweet"></i></a>
            <a href="#"><i className="fa fa-heart"></i></a>'
          </span>
        </small></small></footer>
  </article>
  );
}