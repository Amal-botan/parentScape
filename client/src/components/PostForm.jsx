import React from "react";
import "./PostForm.css"
import { useState, useEffect } from "react";

export default function PostForm(props) {
  const [postText, setPostText] = useState("")
  const [categoryText, setCategory] = useState("")
  const [addcategory, setAddCategory] = useState(false)
  const [addImage, setAddImage] = useState(false)
  const [image, setImage] = useState(false)

  const handleSubmit = () => {
    const post = { post_text: postText, category: categoryText }
    console.log(post)
    props.addPost(post)
  }

  const handleCategoryButton = () => {
    if (addcategory === false) {
      setAddCategory(true)
    } else {
      setAddCategory(false)
    }
  }

  const handleImageButton = () => {
    if (addImage === false) {
      setAddImage(true)
    } else {
      setAddImage(false)
    }
  }
  //Add image part 
  return (
    <main className="container">
      <textarea className="form__textarea" name="text" placeholder="What is on your mind?" value={postText} onChange={(event) => setPostText(event.target.value)} ></textarea>
      <div id="buttons">
        {!addcategory && <button class="buttons" type="submit" value="Add Category" onClick={handleCategoryButton}>Add Category</button>}
        
        {addcategory && <button type="submit" value="Add Category" onClick={handleCategoryButton}>X</button>}

        {!addImage && <button class="buttons" type="submit" value="Add Category" onClick={handleImageButton}>Add Image</button>}

        {addImage && <button type="submit" value="Add Category" onClick={handleImageButton}>X</button>}

        {addcategory &&

          <textarea className="form__textarea" name="text" placeholder="Add category" value={categoryText} onChange={(event) => setCategory(event.target.value)} ></textarea>}

        {addImage &&

          <textarea className="form__textarea" name="text" placeholder="Add category" value={categoryText} onChange={(event) => setImage(event.target.value)} ></textarea>}

        <input type="submit" value="Post" className="form__input" onClick={handleSubmit} />
      </div>
    </main>
  );
}
