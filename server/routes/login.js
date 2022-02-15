/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { restart } = require('nodemon');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require("./helpers");


module.exports = (db) => {
  //add cookie session for the user_id to attach to logged in user
  router.post("/", (req, res) => {

    const {  email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ status: "error", message: "email and password are all required" });
     }

    db.query(`SELECT * FROM users
    WHERE email = $1;`, [email]) //add validation for username unique
      .then(data => {

        const emailDB = data.rows[0].email;
        if (email !== emailDB){
          return res.status(400).send({ status: "error", message: "Email already exists" });
        }
//hash password
         db.query(`SELECT * FROM users
              WHERE users.email = $1;`, [email])
          .then(result => {
            console.log(result.rows[0])
            const user = result.rows[0];

            const token = jwt.sign(user, process.env.JWT_SECRET);
            user.token = token
            return res.status(201).send({ status: "okay", message: "User Logged in", user });
          })
          .catch(err => {
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
  });
  return router;
};
