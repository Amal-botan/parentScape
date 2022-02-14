/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //add cookie session for the user_id to attach to logged in user
  router.post("/:id", (req, res) => {
    console.log(req.body)
    const id = req.params.id;
    db.query(`INSERT INTO comments (user_id, post_id, comment, comment_image, likes)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id;`, [req.body.user_id, id, req.body.comment_text, req.body.comment_image, req.body.likes])
      .then(data => {
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
