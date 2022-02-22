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

        db.query(`UPDATE bookings SET booking_status = $1
        WHERE babysitter_id = $2
        RETURNING *;`, [req.body.booking_status, babysitter_id])
          .then(data => {
            const bookings = data.rows[0]
            res.status(200).json({
              bookings
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
