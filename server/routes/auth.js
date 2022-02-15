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
  router.post("/register", (req, res) => {
    console.log(req.body)
    const { first_name, last_name, email, username, password } = req.body;
    if (!email || !first_name || !last_name || !username || !password) {
      return res.status(400).send({ status: "error", message: "first name, last name, email, password are all required" });
     }

    //validate email format
    // if (email ){
    //   return res.status(400).send({ status: "error", message: "Password should be at least 5 characters" });
    // }

    //validate password format
    if (password.length < 5){
      return res.status(400).send({ status: "error", message: "Password should be at least 5 characters" });
    }

    if (username.length < 5){ //add conditions eg. username doesnt have spaces, or firstname or last...
      return res.status(400).send({ status: "error", message: "Username should be at least 5 characters" });
    }

    db.query(`SELECT * FROM users
    WHERE email = $1;`, [email]) //add validation for username unique
      .then(data => {
        if (data.rows.length > 0){
          return res.status(400).send({ status: "error", message: "Email already exists" });
        }
//hash password
        db.query(`INSERT INTO users (first_name, last_name, email, username, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;`, [first_name, last_name, email, username, password])
          .then(result => {
            const user = result.rows[0];
            delete user.password
            const token = jwt.sign(user, process.env.JWT_SECRET);
            user.token = token
            return res.status(201).send({ status: "okay", message: "Registered", user });
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
