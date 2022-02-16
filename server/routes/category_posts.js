
const { response } = require('express');
const express = require('express');
const router  = express.Router();
const verifyToken = require("./helpers");


let newData2 = [];

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log(req.body);
    console.log("postpage");
    db.query(`SELECT users.id as users_id, users.user_image as user_image, users.username as username, posts.id as post_id, posts.post_text as post_text, posts.post_image as post_image, posts.likes as likes, posts.created_at as post_created_at, categories.category as category
    FROM posts
    LEFT JOIN users ON posts.user_id = users.id
    LEFT JOIN categories ON categories.post_id = posts.id
    WHERE categories.category = $1;`, [req.body.category])
      .then(data => {
        const posts = data.rows;
        return posts;
      }).then(async data => {
        let newData = [];
        for(let i=0; i < data.length; i++){
          console.log("data[i]: ", data[i]);
          const value = await db.query(`SELECT users.id as users_id, users.username as username, users.user_image as user_image, comments.comment as comment, comments.likes as comment_likes, comments.comment_image as comment_image, comments.created_at as comment_created_at
          FROM comments
          LEFT JOIN users ON comments.user_id = users.id
          WHERE comments.post_id = $1`, [data[i].post_id])
          console.log("value: ", value.rows)
            const dataObj = {...data[i], "comments":value.rows};
            newData.push(dataObj);
        }
         res.status(200).json({
           posts: newData
         })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/", (req, res) => { //verifyToken
    // const user = req.user
    // console.log(user);
    db.query(`SELECT * FROM categories;`)
      .then(data => {
        const categories = data.rows
        res.json({ categories });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  return router;

};
