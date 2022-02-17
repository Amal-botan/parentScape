import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";

export default function Post(props) {
  const { posts, editPost, postText, setPostText } = props
  const [editDisplay, setEditDisplay] = useState({})
  // const [postText, setPostText] = useState("")

  if (!posts) {
    return <p>Loading</p>
  }

  const handleButton = (post_id) => {

    setEditDisplay(() => {
      return {
        ...editDisplay,
        [post_id]: true
      }

    })
  }

  const displayPost = (post_id) => {
    setEditDisplay(() => {
      return {
        ...editDisplay,
        [post_id]: false
      }

    })
  }

  const handleSubmit = (post_id) => {
    const post = { post_text: postText }
    console.log(post)
    editPost(post, post_id)
    setEditDisplay(false)
  }


  return (
    <div>
      {
        posts.map((post) => (

          <article className="post">
            <header className="post--header">
              <img className="post--user_image" src={post.user_image} alt="" />
              <h2 className="tweet--username">{post.username}</h2>
            </header>

            {/* {editDisplay[post.post_id] ? <button onClick={() => displayPost(post.post_id)}> X </button> : <button onClick={() => handleButton(post.post_id)}> Edit </button>}
*/}


            {console.log(editDisplay)}
            {editDisplay[post.post_id] ?
              <div>
                <textarea className="form__textarea" name="text" placeholder="What is on your mind?" value={postText} onChange={(event) => setPostText(event.target.value)} ></textarea>
                <input type="submit" value="Post" className="form__input" onClick={() => handleSubmit(post.post_id)} />
              </div>
              :
              <div className="post--text">
                <p>{post.post_text}</p>
              </div>
            }
    <footer className="post--footer">
    <small className="footer--created_at">{post.post_created_at}<small>
      <div id="buttons">
      <Button variant="contained" color="success">
  Like
</Button>
    <Button variant="outlined" color="error">
        Comment
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
    {editDisplay[post.post_id] ? <button class="btn" onClick={() => displayPost(post.post_id)}> X </button> : <button color="secondary" onClick={() => handleButton(post.post_id)}> Edit </button>}
              </div></small></small></footer>
          </article>
      

        ))
      }
    </div>
  );

}