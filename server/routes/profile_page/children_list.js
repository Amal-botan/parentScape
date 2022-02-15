const express = require('express');
const router  = express.Router();
const verifyToken = require("../helpers");

module.exports = (db) => {
  router.get("/", verifyToken, (req, res) => {
    const user = req.user
    console.log(user);
    db.query(`SELECT children.id as child_id, children.name as child_name, children.age as child_age, children.created_at as created_at FROM children
    LEFT JOIN users ON children.user_id = users.id
    WHERE users.id = $1;`, [user.id])
      .then(data => {
        const children = data.rows;
        res.json({ children });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", verifyToken, (req, res) => {
    const user = req.user
    console.log(user);
    db.query(`INSERT INTO children (user_id, name, age)
    VALUES ($1, $2, $3)
    RETURNING *;`, [user.id, req.body.name, req.body.age])
      .then(data => {
        const children = data.rows;
        res.json({ message: "Your child was added" });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.delete("/:id", verifyToken, (req, res) => {
    const user = req.user;
    const id = req.params.id;
    console.log(user);
    db.query(`DELETE FROM children
    WHERE children.id = $1;`,[id])
      .then(data => {
        res.json({ "message": "Child was deleted" });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.put("/:id", verifyToken, (req, res) => {
    const user = req.user;
    const id = req.params.id;
    console.log(user);
    db.query(`UPDATE children SET name = $1, age = $2
      WHERE children.id = $3;`,[req.body.name, req.body.age, id])
        .then(data => {
          res.status(201).json({"message": "Child was edited"})
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
  });


  return router;
};
