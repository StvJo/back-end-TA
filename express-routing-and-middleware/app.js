const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

const logger = (req, res, next) => {
  console.log("Middleware run successfully");
  next();
};

const postChecker = (req, res, next) => {
  const { spesies } = req.body;

  if (spesies === "kucing" || species === "anjing" || species === "kelinci") {
    next();
  } else {
    res.status(400);
  }
};

app.use(express.json());

app.use(logger);

app.get("/hewan", (req, res) => {
  res.json({
    msg: "Get all data hewan success",
    hewan,
  });
});

app.post("/hewan", postChecker, (req, res) => {
  const data = req.body;

  hewan.push(data);

  res.json("Data added successfully");
});

app.get("/hewan/:id", (req, res) => {
  const { id } = req.params;

  const hewanByID = hewan.find((item) => item.id == id);

  res.json(hewanByID);
});

app.put("/hewan/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const hewanIndex = hewan.findIndex((item) => item.id == id);
  const hewanByID = hewan.find((item) => item.id == id);

  if (hewanByID) {
    hewan.splice(hewanIndex, 1, data);

    res.json({
      msg: "Data updated successfully",
      data,
    });
  }
});

app.delete("/hewan/:id", (req, res) => {
  const { id } = req.params;

  const hewanIndex = hewan.findIndex((item) => item.id == id);
  const hewanByID = hewan.find((item) => item.id == id);

  if (hewanByID) {
    hewan.splice(hewanIndex, 1);

    res.json({
      msg: "Data deleted successfully",
    });
  }
});

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});