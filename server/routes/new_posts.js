/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const verifyToken = require("./helpers");


module.exports = (db) => {
  //add cookie session for the user_id to attach to logged in user
  router.post("/", verifyToken, async (req, res) => { //put verfi back
    const user = req.user
    console.log(req.user);

    console.log(user.id)
    const data = await db.query(`INSERT INTO posts (user_id, post_text, post_image)
    VALUES ($1, $2, $3)
    RETURNING *;`, [user.id, req.body.post_text, req.body.post_image]) //put user back
    const id = data.rows[0].id;
    await db.query(`INSERT INTO categories (post_id,category)
        VALUES ($1, $2);`, [id, req.body.category])

    console.log(id)
    const response = await db.query(`SELECT users.id as users_id, users.user_image as user_image, users.username as username, posts.id as post_id, posts.post_text as post_text, posts.post_image as post_image, posts.likes as likes, posts.created_at as post_created_at, categories.category as category
          FROM posts
          LEFT JOIN users ON posts.user_id = users.id
          LEFT JOIN categories ON categories.post_id = posts.id
          WHERE posts.id = $1;`, [id])
    const post = response.rows[0]
    res.status(201).json(post)
    return;

  })
    // .catch(err => {
    //   res
    //     .status(500)
    //     .json({ error: err.message });
    // });


return router;
};
