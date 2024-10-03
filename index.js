const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

const courseData = require("./data/courseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Ashraful's Express Endpoint Server is Running");
});

app.get("/course", (req, res) => {
  res.send(courseData);
});

app.listen(port, () => {
  console.log(`Ashraful's Express Endpoint Server is Running on Port ${port}`);
});
