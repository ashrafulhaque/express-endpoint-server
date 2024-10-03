const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Ashraful's Express Endpoint Server is Running");
});

app.listen(port, () => {
  console.log(`Ashraful's Express Endpoint Server is Running on Port ${port}`);
});
