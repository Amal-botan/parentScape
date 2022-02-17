import "./PostCategory.css"

import { useState } from "react";

function PostCategory(props) {
  const { categories, setCategory, categoryPicked  } = props;
  console.log("Categories Props: ", categories)
  const [buttonClick, setButtonClick] = useState(false)
  const [pickedCategory, setPickedCategory] = useState("")
  
  const handleClick = (picked) => {
    setPickedCategory(picked)
    console.log("pickedCategory: ", picked)
    categoryPicked(picked)
    // setPickedCategory(pickedCategory)
    // categoryPosts()
  }

  return (

    <div>

      <label for="category">Choose a category:</label>
      <select name="category" id="category" value={pickedCategory} onChange={(event) => handleClick(event.target.value)}>
        {
          categories.map(({category}) => {
            return (

          <option value={category}>{category}</option>

            )
          })
        }
      </select>

    </div>


  )
}
export default PostCategory;
