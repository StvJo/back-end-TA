const { CourseModel } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    const courses = await CourseModel.find({}, "-__v").populate("instructor", "-_id -__v");

    try {
      res.json({
        message: "Get courses data success",
        data: courses,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getByID: async (req, res) => {
    const course = await CourseModel.find({}, "-__v").populate("instructor", "-_id -__v");

    try {
      res.json({
        message: "Get course data success",
        data: course,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  addCourse: async (req, res) => {
    const data = req.body;

    try {
      await CourseModel.create(data);
      res.json({
        message: "Data created successfully",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  updateCourse: async (req, res) => {
    const course = await CourseModel.findById(req.params.id, "-__v");
    const data = req.body;

    try {
      await CourseModel.updateOne({ _id: req.params.id }, data),
        res.json({
          message: "Data updated successfully",
        });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  deleteCourse: async (req, res) => {
    const course = await CourseModel.findById(req.params.id, "-__v");

    try {
      await CourseModel.deleteOne({ _id: req.params.id });
      res.json({
        message: "Data deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};