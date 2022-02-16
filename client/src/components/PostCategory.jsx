import "./PostCategory.css"

import { useState } from "react";

function PostCategory(props) {
  const { categories } = props;
  console.log("Categories Props: ", categories)
  const [buttonClick, setButtonClick] = useState(false)

  const category = (categories) => {
    for (let i = 0; i < categories.length; i++) {
      <p> {categories[i].category} </p>
    }


  }



  return (

    <div>

      <label for="cars">Choose a category:</label>
      <select name="cars" id="cars">
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
