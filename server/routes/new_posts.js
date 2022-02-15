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
  //add cookie session for the user_id to attach to logged in user
  router.post("/", verifyToken, (req, res) => {
    const user = req.user

    db.query(`INSERT INTO posts (user_id, post_text, post_image)
    VALUES ($1, $2, $3)
    RETURNING id;`, [user.id, req.body.post_text, req.body.post_image])
      .then(data => {
        const post = data.rows;
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
