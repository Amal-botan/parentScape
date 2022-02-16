/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const verifyToken = require("./helpers");


module.exports = (db) => {
  router.post("/:id", (req, res) => { //verifyToken
  // const user = req.user
  const id = req.params.id;
    // console.log(user)

    db.query(`SELECT users.id as users_id
         FROM posts
         LEFT JOIN users ON posts.user_id = users.id
         WHERE posts.id = $1;`,[id])
      .then(data => {
        console.log(data.rows[0].users_id)
        const postUserId = data.rows[0].users_id;
        //  if (postUserId !== user.id){
        //   return res.status(400).send({ status: "error", message: "You can only edit your own post" });
        //  }

        db.query(`UPDATE posts SET post_text = $1, post_image = $2
        WHERE posts.id = $3;`,[req.body.post_text, req.body.post_image, id])
          .then(data => {
            // console.log("Edited post: ", data)
            // const editedPost = data.rows[0]
            // res.status(201).json({ post: editedPost})
            db.query(`SELECT users.id as users_id, users.user_image as user_image, users.username as username, posts.id as post_id, posts.post_text as post_text, posts.post_image as post_image, posts.likes as likes, posts.created_at as post_created_at
            FROM posts
            LEFT JOIN users ON posts.user_id = users.id
            WHERE posts.id = $1;`,[id])
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
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });

      })
      .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });


      })


  return router;
};


