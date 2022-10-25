const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());

const courseData = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/course-data", (req, res) => {
  // console.log(courseData);
  res.send(courseData);
});

app.get("/course-data/:id", (req, res) => {
  console.log("inside index.js sever");
  console.log(req.params.id);
  const requestedId = req.params.id;
  courseData.map((course) => {
    if (course.id === requestedId) {
      res.send(course);
    }
  });
});

app.listen(port, () => {
  console.log(`Geek Hub server is listening on port ${port}`);
});
