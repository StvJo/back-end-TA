const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    maxlength: 50,
    minlength: 1,
  },
  description: {
    type: String,
    require: true,
    maxlength: 500,
    minlength: 1,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructors",
    require: true,
  },
  scheduleDateTime: {
    type: Date,
    require: true,
  },
});

const CourseModel = mongoose.model("Courses", courseSchema);
module.exports = CourseModel;
