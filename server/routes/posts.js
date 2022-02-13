
const { response } = require('express');
const express = require('express');
const router  = express.Router();

let newData2 = [];

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("postpage");
    db.query(`SELECT users.id as users_id, users.username as username, posts.id as post_id, posts.post_text as post_text
    FROM posts
    LEFT JOIN users ON posts.user_id = users.id;`)
      .then(data => {
        const posts = data.rows;
        return posts;
      }).then(async data => {
        let newData = [];

        for(let i=0; i < data.length; i++){
          console.log("data[i]: ", data[i]);
          const value = await db.query(`SELECT users.id as users_id, users.username as username, comments.comment as comment
          FROM comments
          LEFT JOIN users ON comments.user_id = users.id
          WHERE comments.post_id = $1`, [data[i].post_id])
          console.log("value: ", value.rows)
            const dataObj = {...data[i], "comments":value.rows};
            newData.push(dataObj);

          // console.log(value.rows);

          // (err,data) => {
          //    const dataObj = {...post, "comments":data.rows};
          //   //  console.log(dataObj)
          //   return dataObj
          //   // console.log(data.rows);
          // })
        }
        //  console.log(newData);
         res.status(200).json({
           result: newData
         })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
