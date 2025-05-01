const express = require("express");
const Student = require("../models/student");
const Course = require("../models/course");
const router = express.Router();

// GET all students with their courses
router.get("/students-with-courses", async (req, res) => {
  try {
    const students = await Student.find({});
    const courses = await Course.find({});

    const data = students.map((student) => {
      const studentCourses = courses.filter(
        (course) => course.student_id === student.student_id
      );
      return {
        ...student._doc,
        courses: studentCourses,
      };
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
