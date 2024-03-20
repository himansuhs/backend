import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5500;
const details = {
  email: "himansu@gmail.com",
  password: " 123442",
};
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("combined"));
// app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
  // res.sendStatus(200);
});
app.post("/register", (req, res) => {
  console.log(req.body);
  if (
    req.body.email === details.email &&
    req.body.password === details.password
  ) {
    res.send("successfully logged in");
  } else {
    res.send("logged in failed");
  }
});
app.listen(port, () => {
  console.log(`the server is up and running on port number ${port}`);
});
