import React from "react";
import "./PostForm.css";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostForm(props) {
  const [postText, setPostText] = useState("");
  const [categoryText, setCategory] = useState("");
  const [addcategory, setAddCategory] = useState(false);
  const [addImage, setAddImage] = useState(false);
  const [image, setImage] = useState(false);

  const handleSubmit = () => {
    const post = { post_text: postText, category: categoryText };
    console.log(post);
    props.addPost(post);
  };

  const handleCategoryButton = () => {
    if (addcategory === false) {
      setAddCategory(true);
    } else {
      setAddCategory(false);
    }
  };

  const handleImageButton = () => {
    if (addImage === false) {
      setAddImage(true);
    } else {
      setAddImage(false);
    }
  };
  const Input = styled("input")({
    display: "none",
  });
  //Add image part
  return (
    <div className="tweet-wrap">
      <textarea
        className="form__textarea"
        name="text"
        placeholder="What is on your mind?"
        value={postText}
        onChange={(event) => setPostText(event.target.value)}
      ></textarea>
      <div id="buttons">
        {!addcategory && (
          <Button
            variant="contained"
            component="span"
            onClick={handleCategoryButton}
          >
            Add Category
          </Button>
        )}

        {addcategory && (
          <button
            type="submit"
            value="Add Category"
            onClick={handleCategoryButton}
          >
            X
          </button>
        )}

        {/* {!addImage && <button class="buttons" type="submit" value="Add Category" onClick={handleImageButton}>Add Image</button>} */}

        {addImage && (
          <button
            type="submit"
            value="Add Category"
            onClick={handleImageButton}
          >
            X
          </button>
        )}

        {addcategory && (
          <textarea
            className="form__textarea"
            name="text"
            placeholder="Add category"
            value={categoryText}
            onChange={(event) => setCategory(event.target.value)}
          ></textarea>
        )}
        {addImage && (
          <textarea
            className="form__textarea"
            name="text"
            placeholder="Add category"
            value={categoryText}
            onChange={(event) => setImage(event.target.value)}
          ></textarea>
        )}
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <Button
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
          type="submit"
          onClick={handleSubmit}
        >
          Post
        </Button>
        
        {/* <input type="submit" value="Post" className="form__input" onClick={handleSubmit} /> */}
      </div>
    </div>
  );
}
