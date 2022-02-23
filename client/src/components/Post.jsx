import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Typography from '@mui/material/Typography';

export default function Post(props) {
  const { addComment, posts, editPost, postText, setPostText, user, category, setComments, setCommentsText, comments_text } = props;
  const [editDisplay, setEditDisplay] = useState({});
  const [btnClass, setBtnClass] = useState(false);
  const [btnColor, setBtnColor] = useState("red");
  // const [postText, setPostText] = useState("")
  const [commentsDisplay, setCommentsDisplay] = useState({});




  console.log("Post category: ", category)

  console.log("Post Post: ", posts)

  if (!posts) {
    return <p>Loading</p>;
  }

  const handleButtonComments = (post_id) => {
    setCommentsDisplay(() => {
      return {
        ...commentsDisplay,
        [post_id]: true,
      };
    });
  };

  const displayComments = (post_id) => {
    setCommentsDisplay(() => {
      return {
        ...commentsDisplay,
        [post_id]: false,
      };
    });
  };

  const handleButton = (post_id) => {
    setEditDisplay(() => {
      return {
        ...editDisplay,
        [post_id]: true,
      };
    });
  };

  const displayPost = (post_id) => {
    setEditDisplay(() => {
      return {
        ...editDisplay,
        [post_id]: false,
      };
    });
  };

  const handleSubmit = (post_id) => {
    const post = { post_text: postText };
    console.log(post);
    editPost(post, post_id);
    setEditDisplay(false);
  };

  const handleSubmitComment = (post_id) => {
    const newComment = { comment: comments_text };

    addComment(newComment, post_id)
   setCommentsText("")
  };

  return posts.map((post) => (
    <div>
    
      <link
        href="https://fonts.googleapis.com/css?family=Asap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />

      <div className="tweet-wrap">
        <div className="tweet-header">
          <img src={post.user_image} alt="" className="avator" />
          <div className="tweet-header-info">
            {post.username} 
            {/* <span>. {post.post_created_at}</span> */}
            {editDisplay[post.post_id] ? (
              <div>
                <textarea
                  className="form__textarea"
                  name="text"
                  placeholder="What is on your mind?"
                  value={postText}
                  onChange={(event) => setPostText(event.target.value)}
                ></textarea>
                {/* <input
                  type="submit"
                  value="Post"
                  className="form__input"
                  onClick={() => handleSubmit(post.post_id)}
                /> */}

                <Button
                  variant="contained"
                  // size="small"
                  endIcon={<SendIcon />}
                  type="submit"
                  onClick={() => handleSubmit(post.post_id)}
                >
                  Post
                </Button>


              </div>
            ) : (
              <div className="post--text">
                <p>{post.post_text}</p>
              </div>
            )}
          </div>
        </div>
        <div className="tweet-img-wrap">
          {/* <img src="https://pbs.twimg.com/media/Dgti2h0WkAEUPmT.png" alt="" className="tweet-img"/> */}
        </div>
        <div className="tweet-info-counts">
          {/* <div className="comments">
            <svg
              className="feather feather-message-circle sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <div className="comment-count"></div>
          </div> */}

          {commentsDisplay[post.post_id] ? (
            <Button variant="outlined" color="error" className="btn" style={{ "display":"flex", "marginRight":"20px", "marginLeft":"-20px"}} onClick={() => displayComments(post.post_id)}>
              {" "}
              Cancel{" "}
            </Button>
            
          ) : (
            <div className="comments">
            <button>
            <svg
            className="feather feather-send sc-dnqmqq jxshSx"
            xmlns="http://www.w3.org/2000/svg"
              color="secondary"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              
              onClick={() => handleButtonComments(post.post_id)}
            >
              {" "}
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
 {" "}
            </svg>
            </button>
            <div className="comment-count"></div>

            </div>
          )}





          <div className="retweets">
            <svg
              className="feather feather-repeat sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
            <div className="retweet-count"></div>
          </div>

          <div className="likes">
            <svg
              className="feather feather-heart sc-dnqmqq jxshSx"
              onClick={() => {
                btnClass ? setBtnClass(false) : setBtnClass(true);
              }}
              className={btnClass ? "btnClass clicked" : "btnClass"}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <div className="likes-count"></div>
          </div>

          <div className="message">
            <svg
              className="feather feather-send sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
          {user.id === post.users_id ? editDisplay[post.post_id] ? (
            <Button variant="outlined" color="error" className="btn" 
            onClick={() => displayPost(post.post_id)}
            // style={{"marginTop":"-9px", "display":"flex", "marginRight":"20px"}}

            >
              {" "}
              Cancel{" "}
            </Button>
          ) : (
            <button>
            <EditOutlinedIcon item xs={4}
            // color="secondary"
            // width="20"
            // height="20"
            // viewBox="0 0 24 24"
            // fill="none"
            // stroke="currentColor"
            // stroke-width="2"
            // stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
              onClick={() => handleButton(post.post_id)}
              style={{"marginTop":"-2px", "display":"flex", "marginRight":"20px", "marginLeft": "14px"}}
              
              >
              <Typography>Two Tone</Typography>
              Edit
            </EditOutlinedIcon>
            </button>
          ) : null}

        </div>

        {commentsDisplay[post.post_id] ? (
          <div>
           
            {post.comments?.filter((comm) => {
              if (post.post_id === comm.post_id) {
                return comm
              }
            }
            ).map((comm) => {

              { console.log("Comments: ", comm.comment) }
              return (
                <div>
                 <p>  </p>
                 
                  <div className="tweet-header">
                    <img src={comm.user_image} alt="" className="avator" />
                    <div className="tweet-header-info">
                      {comm.username} <span>{comm.username}</span>
                      <span>. {comm.comment_created_at}</span>


                      {/* <p>  {comm.user_image} </p>
                      <p>  {comm.username} </p>
                      <p>  {comm.comment_image} </p>
                      <p>  {comm.comment_created_at} </p>
              <p>  {comm.likes} </p>*/}

                      {<p>  {comm.comment} </p> }
                    </div>
                  </div>
                </div>
              )
            })}

            <div>
            <textarea
              className="form__textarea"
              name="text"
              placeholder="What would you like to comment?"
              value={comments_text}
              onChange={(event) =>  
                setCommentsText(event.target.value)}
              
            ></textarea>
            
            {/* <input
              type="submit"
              value="Post"
              className="form__input"
              onClick={() => handleSubmit(post.post_id)}
            /> */}

            <Button
              variant="contained"
              size="small"
              endIcon={<SendIcon />}
              type="submit"
              onClick={() => handleSubmitComment(post.post_id)}
            >
              Comment
            </Button>

          </div>

            
          </div>
        ) : (
          <div className="post--text">

          </div>
        )}


      </div>
    </div>
  ));
}