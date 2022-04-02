const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const users = [
  {
    username: "terra",
    password: "password123admin",
    role: "admin",
  },
  {
    username: "dave",
    password: "password123member",
    role: "member",
  },
];

const accessTokenSecret = "youraccesstokensecret";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      accessTokenSecret
    );

    res.json({ accessToken });
  } else {
    res.send("invalid username or password");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
