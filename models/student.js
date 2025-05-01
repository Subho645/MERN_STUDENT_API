const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true },
  address: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model("Student", studentSchema);
