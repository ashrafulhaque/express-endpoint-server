const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const courseData = require("./data/courseDetails.json");

app.get("/", (req, res) => {
  res.send("Ashraful's Express Endpoint Server is Running");
});

app.get("/products", (req, res) => {
  res.send(courseData);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const course = courseData.find((c) => c._id === id);
  if (!course) {
    return res.status(404).send({ error: "Course Not Found" });
  }
  res.send(course);
});

// Export the app to be used by Vercel
module.exports = app;
