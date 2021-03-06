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
  router.post("/:id", verifyToken, (req, res) => {
    const user = req.user
    console.log(user)
     const id = req.params.id;
    db.query(`INSERT INTO comments (user_id, post_id, comment, comment_image)
    VALUES ($1, $2, $3, $4)
    RETURNING *;`, [user.id, id, req.body.comment, req.body.comment_image])
      .then(data => {
        console.log("From comment: ", data.rows)
        const comment = data.rows[0];
        res.status(201).json({comment})
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
