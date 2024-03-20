import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
import requestFilter from "./public/routelevel.js";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5500;
const route = express.Router();
route.use(requestFilter);
app.use("/contact", route);
function middlewareFunction(req, res, next) {
  console.log("Request Method :" + req.method);
  console.log("Request url :" + req.url);
  next(); //let them go to the req handler
}

app.use(middlewareFunction);
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("combined"));
// app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
  // console.log(req.query);
  // res.sendStatus(200);
});
app.get("/contact", (req, res) => {
  res.send("contact us");
  console.log(age.query);
});
app.post("/register", (req, res) => {
  // console.log(req.body);
  // console.log(req.query);
  res.send("the form is submitted");
});
app.listen(port, () => {
  console.log(`the server is up and running on port number ${port}`);
});
