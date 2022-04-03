const express = require("express");
const router = express.Router();

const {
  getAll,
  getByID,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

router.get("/", getAll);
router.get("/:id", getByID);
router.post("/", addCourse)
router.put("/:id", updateCourse)
router.delete("/:id", deleteCourse)

module.exports = router;