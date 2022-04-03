const { ParticipantModel } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    const participants = await ParticipantModel.find({}, "-__v").populate("Courses", "-_id -__v");

    try {
      res.json({
        message: "Get participants data success",
        data: participants,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getByID: async (req, res) => {
    const participant = await ParticipantModel.find({}, "-__v").populate("Courses", "-_id -__v");

    try {
      res.json({
        message: "Get participant data success",
        data: participant,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  addParticipant: async (req, res) => {
    const data = req.body;

    try {
      await ParticipantModel.create(data);
      res.json({
        message: "Data created successfully",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  updateParticipant: async (req, res) => {
    const participant = await ParticipantModel.findById(req.params.id, "-__v");
    const data = req.body;

    try {
      await ParticipantModel.updateOne({ _id: req.params.id }, data),
        res.json({
          message: "Data updated successfully",
        });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  deleteParticipant: async (req, res) => {
    const participant = await ParticipantModel.findById(req.params.id, "-__v");

    try {
      await ParticipantModel.deleteOne({ _id: req.params.id });
      res.json({
        message: "Data deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};