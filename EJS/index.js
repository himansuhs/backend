import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
// import requestFilter from "./public/routelevel.js";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5500;
// const route = express.Router();
// route.use(requestFilter);
// app.use("/contact", route);

// app.use(middlewareFunction);
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("combined"));
// app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", (req, res) => {
  let name = req.body.name;
  res.render("index.ejs", { nameofuser: name });
});

app.listen(port, () => {
  console.log(`the server is up and running on port number ${port}`);
});
