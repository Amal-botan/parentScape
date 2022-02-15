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
  router.get("/", verifyToken, (req, res) => {
    const user = req.user
    console.log(user);
    db.query(`SELECT * FROM users;`)
      .then(data => {
        res.json({ user });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
