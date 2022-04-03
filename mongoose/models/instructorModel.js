const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 100,
    minlength: 1,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  location: {
    type: String,
  },
});

const InstructorModel = mongoose.model("Instructors", instructorSchema);
module.exports = InstructorModel;
