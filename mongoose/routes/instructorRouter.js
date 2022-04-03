const express = require("express");
const router = express.Router();

const {
  getAll,
  getByID,
  addInstructor,
  updateInstructor,
  deleteInstructor,
} = require("../controllers/instructorController");

router.get("/", getAll);
router.get("/:id", getByID);
router.post("/", addInstructor);
router.put("/:id", updateInstructor);
router.delete("/:id", deleteInstructor);

module.exports = router;
