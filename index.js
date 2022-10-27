const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./Data/categories.json");
const courses = require("./Data/courses.json");

app.get("/", (req, res) => {
  res.send("api ggggggg running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const category_course = courses.filter((n) => n.category_id === id);
  res.send(category_course);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((n) => n.id === id);
  res.send(selectedCourse);
});
app.listen(port, () => {
  console.log(" running ", port);
});
