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
  router.put("/:id", verifyToken, (req, res) => {
    const user = req.user
    const id = req.params.id;

    db.query(`SELECT users.id as users_id
    FROM comments
    LEFT JOIN users ON comments.user_id = users.id
    WHERE comments.id = $1;`,[id])
    .then(data => {

      const commentUserId = data.rows[0].users_id;
         if (commentUserId !== user.id){
          return res.status(400).send({ status: "error", message: "You can only edit your own comment" });
         }

      db.query(`UPDATE comments SET comment = $1, comment_image = $2
      WHERE comments.id = $3;`,[req.body.comment, req.body.comment_image, id])
        .then(data => {
          res.status(201).json({"message": "comment is edited"})
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  });
  return router;
};
