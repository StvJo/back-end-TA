const { InstructorModel } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    const instructors = await InstructorModel.find({}, "-__v");

    try {
      res.json({
        message: "Get instructors data success",
        data: instructors,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getByID: async (req, res) => {
    const instructor = await InstructorModel.findById(req.params.id);

    try {
      res.json({
        message: "Get instructor data success",
        data: instructor,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  addInstructor: async (req, res) => {
    const data = req.body;

    try {
      await InstructorModel.create(data);
      res.json({
        message: "Data created successfully",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  updateInstructor: async (req, res) => {
    const instructor = await InstructorModel.findById(req.params.id, "-__v");
    const data = req.body;

    try {
      await InstructorModel.updateOne({ _id: req.params.id }, data),
        res.json({
          message: "Data updated successfully",
        });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  deleteInstructor: async (req, res) => {
    const instructor = await PublisherModel.findById(req.params.id, "-__v");

    try {
      await InstructorModel.deleteOne({ _id: req.params.id });
      res.json({
        message: "Data deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
