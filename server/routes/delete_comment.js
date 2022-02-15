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
  router.delete("/:id", verifyToken, (req, res) => {
    const user = req.user
    const id = req.params.id;
    console.log(id)
    db.query(`SELECT users.id as users_id
    FROM comments
    LEFT JOIN users ON comments.user_id = users.id
    WHERE comments.id = $1;`,[id])
    .then(data => {
      console.log(data);
      const commentUserId = data.rows[0].users_id;
      if (commentUserId !== user.id){
       return res.status(400).send({ status: "error", message: "You can only delete your own comment" });
      }

      db.query(`DELETE FROM comments
      WHERE comments.id = $1;`,[id])
        .then(data => {
          res.status(201).json({"message": "comment is deleted"})
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
