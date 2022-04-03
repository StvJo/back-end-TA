const express = require('express');
const router = express.Router()

const instructorRouter = require("./instructorRouter")
const courseRouter = require("./courseRouter")
const participantRouter = require("./participantsRouter")

router.get("/", (req, res) => {
  res.json("Express connected to MongoDB with Mongoose");
});

router.use("/instructors", instructorRouter)
router.use("/courses", courseRouter)
router.use("/particpants", participantRouter)

module.exports = router