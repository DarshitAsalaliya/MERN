const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// DB CONNECTION
dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middleware

const checkLoginMeddleware = (req, res, next) => {
  next();
};

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/about", checkLoginMeddleware, (req, res) => {
  res.send("About");
});

app.get("/contact", checkLoginMeddleware, (req, res) => {
  res.send("Contact");
});

app.get("/signin", (req, res) => {
  res.send("Sign In");
});

app.get("/signup", (req, res) => {
  res.send("Sign Up");
});

app.listen(PORT, () => {});
