import bodyParser from "body-parser";
import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
// import requestFilter from "./public/routelevel.js";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5500;
app.use(bodyParser.urlencoded({ extended: true }));

const credientials = {
  email: "himansu@gmail.com",
  pass: "123122",
};

// creating the middleware
let grantAccess = false;
const authStatus = (res, req, next) => {
  if (
    req.body.email === credientials.email &&
    req.body.password === credientials.pass
  ) {
    grantAccess = true;
  } else {
    grantAccess = false;
  }
  next();
};

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/landing.html");
  // console.log(req.query);
  // res.sendStatus(200);
});
app.get("/login", (req, res) => {
  res.sendFile(_dirname + "/public/login.html");
  // console.log(req.query);
  // res.sendStatus(200);
});
app.post("/login", authStatus, (req, res) => {
  if (grantAccess) {
    res.redirect("/home");
  } else {
    res.json({ message: "login unsucessful" });
  }
});

app.get("/home", (res, req) => {
  if (grantAccess) {
    res.sendFile(_dirname + "/public/home.html");
  } else {
    res.redirect("/");
  }
});
app.get("/logout", (res, req) => {
  grantAccess = false;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`the server is up and running on port number ${port}`);
});
