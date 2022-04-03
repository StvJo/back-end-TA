const express = require("express");
const router = express.Router();

const {
  getAll,
  getByID,
  addParticipant,
  updateParticipant,
  deleteParticipant,
} = require("../controllers/participantController");

router.get("/", getAll);
router.get("/:id", getByID);
router.post("/", addParticipant)
router.put("/:id", updateParticipant)
router.delete("/:id", deleteParticipant)

module.exports = router;