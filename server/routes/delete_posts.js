/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.delete("/:id", (req, res) => {
  //add cookie session for the user_id to attach to logged in user
    const id = req.params.id;
    console.log(req.body)
    db.query(`DELETE FROM posts
    WHERE posts.id = $1;`,[id])
      .then(data => {
        res.status(201).json({"message": "post is deleted"})
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
