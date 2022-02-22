// import "./PostCategory.css"

// import { useState } from "react";

// function PostCategory(props) {
//   const { categories, setCategory, categoryPicked  } = props;
//   console.log("Categories Props: ", categories)
//   // const [buttonClick, setButtonClick] = useState(false)
//   const [pickedCategory, setPickedCategory] = useState({})
  
//   const handleClick = (picked) => {
//     setPickedCategory(picked)
//     console.log("pickedCategory: ", picked)
//     setCategory(picked)
//     // setPickedCategory(pickedCategory)
//     // categoryPosts()
//   }


//   return (

//     <div>

//       <label for="category">Choose a category:</label>
//       <select name="category" id="category" value={pickedCategory} onChange={(event) => handleClick(event.target.value)}>
//         {
//           categories.map((category) => {
//             {console.log({category})}
//             return (
              
//           <option value={category}>{category.category}</option>

//             )
//           })
//         }
//       </select>

//     </div>


//   )
// }
// export default PostCategory;
