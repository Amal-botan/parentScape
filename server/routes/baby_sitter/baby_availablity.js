/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const verifyToken = require("../helpers");


module.exports = (db) => {
  router.post("/:id", (req, res) => { //verifyToken
    // const user = req.user
    const id = req.params.id;
    // console.log(user)

    db.query(`SELECT babysitters.id as babysitter_id
         FROM babysitters
         WHERE babysitters.id = $1;`, [id])
      .then(data => {
        console.log(data.rows[0].babysitter_id)
        const babysitter_id = data.rows[0].babysitter_id;
        //  if (postUserId !== user.id){
        //   return res.status(400).send({ status: "error", message: "You can only edit your own post" });
        //  }

        db.query(`UPDATE babysitters SET available = $1
        WHERE babysitters.id = $2
        RETURNING *;`, [req.body.available, babysitter_id])
          .then(data => {
            const babysitter = data.rows[0]
            res.status(200).json({
              babysitter
            })
          }) .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })


    return router;
};
