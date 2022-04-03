const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 1,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  email: {
    type: String,
    maxlength: 50,
  },
  phone: {
    type: String,
    maxlength: 13,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
});

const ParticipantModel = mongoose.model("Participants", participantSchema);
module.exports = ParticipantModel;