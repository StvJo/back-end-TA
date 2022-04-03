const mongoose = require("mongoose");

const uri =
  "mongodb+srv://stvjo:sjon10210221@cluster0.khpm6.mongodb.net/online-course-website?retryWrites=true&w=majority";

const db = mongoose.connect(uri);

module.exports = db;