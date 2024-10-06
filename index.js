// Programmer: Md. Ashraful haque
// Description: A Node.js and Express.js backend serving product data through RESTful API endpoints

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
  const id = req.params.id; // No need to parse as integer
  const course = courseData.find((c) => c._id === id);
  console.log(id, course);
  if (!course) {
    return res.status(404).send({ error: "Course Not Found" });
  }

  res.send(course);
});

// Handle undefined routes (404 Not Found)
app.use((req, res) => {
  res.status(404).send({ error: "Endpoint Not Found" });
});

app.listen(port, () => {
  console.log(`Ashraful's Express Endpoint Server is Running on Port ${port}`);
});
