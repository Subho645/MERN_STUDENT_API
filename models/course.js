const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course_id: { type: String, required: true, unique: true },
  course_name: String,
  duration: String,
  fees: { type: Number, min: 5000 },
  student_id: String,
});

module.exports = mongoose.model("Course", courseSchema);
