const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cartRouter = require("./routes/cart.router.js");
const pool = require("../server/modules/pool");
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/cart", cartRouter);
app.put("/reset", (req, res) => {
  const sqlQuery = `
        UPDATE cart
        SET purchased = false;
  `;
  pool
    .query(sqlQuery)
    .then(() => {
      console.log("RESET complete");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("ERROR in RESET ROUte", err);
      res.sendStatus(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
