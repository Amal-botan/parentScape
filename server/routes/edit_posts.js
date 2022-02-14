/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.put("/:id", (req, res) => {
  //add cookie session for the user_id to attach to logged in user
    const id = req.params.id;
    console.log(req.body)
    console.log("user_id cookie: ", user_id)
    db.query(`UPDATE posts SET post_text = $1, post_image = $2
    WHERE posts.id = $3;`,[req.body.post_text, req.body.post_image, id])
      .then(data => {
        res.status(201).json({"message": "post is edited"})
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
