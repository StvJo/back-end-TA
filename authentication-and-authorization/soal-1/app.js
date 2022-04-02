const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const sessions = require("express-session");
const cookieParser = require("cookie-parser");

app.use(
  sessions({
    secret: "secret",
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    resave: false,
  })
);

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const myusername = "user1";
const mypassword = "mypassword";

let session;

app.get("/", (req, res) => {
  session = req.session;

  if (session.nama) {
    res.send("Login success <a href='/logout'>Logout</a>");
  } else {
    res.sendFile("./views/index.html", { root: __dirname });
  }
});

app.post("/user", (req, res) => {
  if (req.body.username === myusername && req.body.password === mypassword) {
    session = req.session;
    session.nama = req.body.username;

    res.send(
      `Login success <a href=\'/logout'>logout</a> | <a href="/">Home</a>`
    );
  } else {
    req.send("invalid username or password, <a href='/'>Home</a>");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
