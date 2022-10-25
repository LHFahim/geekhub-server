const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

const courseData = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/course-data", (req, res) => {
  res.send(courseData);
});

app.listen(port, () => {
  console.log(`Geek Hub server is listening on port ${port}`);
});
