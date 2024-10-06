const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

const courseData = require("./data/courseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Ashraful's Express Endpoint Server is Running");
});

app.get("/products", (req, res) => {
  res.send(courseData);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courseData.find((c) => c._id === id);

  if (!course) {
    return res.status(404).send("Course Not Found");
  }

  res.send(course);
});

app.listen(port, () => {
  console.log(`Ashraful's Express Endpoint Server is Running on Port ${port}`);
});
