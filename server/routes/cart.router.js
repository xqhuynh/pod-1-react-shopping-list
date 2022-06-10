const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// TODO - Add routes here...
// GET route to get db
router.get("/", (req, res) => {
  const sqlQuery = `SELECT * FROM cart ORDER BY item ASC`;
  pool
    .query(sqlQuery)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("ERROR on GET", err);
      res.sendStatus(500);
    });
});

// POST route to add new item to db
router.post("/", (req, res) => {
  const item = req.body.item;
  const quantity = req.body.quantity;
  const unit = req.body.unit;

  const sqlQuery = `INSERT INTO cart (item, quantity, unit)
  VALUES ($1, $2, $3);`;

  const sqlParams = [item, quantity, unit];

  pool
    .query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(200);
      console.log("POST Success!");
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log("Error in POST", err);
    });
});

router.post("/:id", (req, res) => {
  const id = req.params.id;

  const sqlQuery = `UPDATE cart
        SET purchased = true
        WHERE id = $1;`;
  const sqlParams = [id];
  pool
    .query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(200);
      console.log("UPDATE Success");
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log("ERROR in UPDATE POST", err);
    });
});

// DELETE route to delete item from db
router.delete("/:id", (req, res) => {
  const sqlQuery = `
      DELETE FROM cart
      WHERE id = ($1)`;
  const sqlParams = [req.params.id];
  pool
    .query(sqlQuery, sqlParams)
    .then(() => {
      console.log("DELETE item success");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("ERROR in DELETE by Id", err);
      res.sendStatus(500);
    });
});

// DELETE route to delete all items from cart
router.delete("/", (req, res) => {
  const sqlQuery = `DELETE FROM cart`;
  pool
    .query(sqlQuery)
    .then(() => {
      console.log("RESET success");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("ERROR in DELETE route", err);
    });
});

module.exports = router;
