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
    console.log(user)
    const id = req.params.id;

    db.query(`SELECT users.id as users_id
         FROM posts
         LEFT JOIN users ON posts.user_id = users.id
         WHERE posts.id = $1;`,[id])
      .then(data => {
        console.log(data.rows[0].users_id)

        const postUserId = data.rows[0].users_id;
         if (postUserId !== user.id){
          return res.status(400).send({ status: "error", message: "You can only delete your own post" });
         }
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
  });
  return router;
};
