/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log(req.body)
    db.query(`INSERT INTO posts (user_id, post_text, likes)
    VALUES ($1, $2, $3)
    RETURNING id;`, [req.body.user_id, req.body.post_text, req.body.likes])
      .then(data => {
        console.log(data)
        const post = data.rows;
        console.log("post.id: ", post[0].id)
        db.query(`INSERT INTO categories (post_id,category)
        VALUES ($1, $2);`,[post[0].id, req.body.category])
        res.status(201).json({})
        return;
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
