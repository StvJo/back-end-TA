const express = require("express");
const sequelize = require("sequelize");
const hewan = require("./models/hewan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .then(() => {
    Hewan.sync().then(() => console.log("table Hewan created"));
  })
  .catch((err) => console.error("Unable to connect to the database: ", err));

app.get("/hewan", async (req, res) => {
  const dataHewan = await hewan.findAll();
  res.json(dataHewan);
});

app.get("/hewan/:id", async (req, res) => {
  const hewanByID = await hewan.findOne({ where: { id: req.params } });
  res.json(hewanByID);
});

app.post("/hewan", async (req, res) => {
  const newHewan = await hewan.create(req.body);
  res.json({
    msg: "Data added sucessfully",
    data: newHewan,
  });
});

app.put("/hewan/:id", async (req, res) => {
  const updateHewan = await hewan.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({
    messege: "Data updated successfully",
    data: updateHewan,
  });
});

app.delete("/hewan/:id", async (req, res) => {
  const deleteHewan = await hewan.destroy({ where: { id: req.params.id } });
  res.json({
    messege: "Data deleted successfully",
    data: deleteHewan,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
