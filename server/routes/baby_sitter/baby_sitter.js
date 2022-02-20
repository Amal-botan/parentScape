/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const verifyToken = require("../helpers");

module.exports = (db) => {
  router.get("/", (req, res) => { //verifyToken
    // const user = req.user
    // console.log(user);
    db.query(`SELECT * FROM babysitters;`)
      .then(data => {
        const babysitter = data.rows;
       res.json({ babysitter });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", verifyToken, (req, res) => { //verifyToken
    const user = req.user;
    console.log(user)
    const { user_id, babysitter_id, booking_date, booking_time_start, booking_time_end } = req.body;
    db.query(`INSERT INTO bookings (user_id, babysitter_id, booking_date, booking_time_start, booking_time_end)
    VALUES ($1, $2, $3, $4, $5)
      RETURNING *;`, [user.id, babysitter_id, booking_date, booking_time_start, booking_time_end])
      .then(data => {
        console.log(data)
        const booking = data.rows;
       res.json({ booking });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/booking", (req, res) => { //verifyToken
    // const user = req.user
    // console.log(user);
    db.query(`SELECT users.id as user_id, users.first_name as user_first_name, users.last_name as user_last_name, users.username as user_username,
    babysitters.id as babysitter_id,  babysitters.first_name as babysitter_first_name,  babysitters.last_name as  babysitter_last_name,  babysitters.city as babysitter_city,
    babysitters.phone_number as  babysitter_phone_number, * FROM bookings
    LEFT JOIN users ON bookings.user_id = users.id
    LEFT JOIN babysitters ON bookings.babysitter_id = babysitters.id;`)
      .then(data => {
        const bookings = data.rows;
       res.json({ bookings });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  return router;
};
