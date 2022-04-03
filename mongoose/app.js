const express = require("express");

const db = require("./config/db");
const allRouter = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

db.then(() => console.log("Mongoose connection success")).catch((err) =>
  console.log("Mongoose connection failed")
);

app.use(express.json());
app.use(allRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
