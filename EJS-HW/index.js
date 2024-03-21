import express from "express";
import bodyParser from "body-parser";

const port = 5500;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
function countletter(first, last) {
  let add = first + last;
  return add.length;
}

app.post("/submit", (req, res) => {
  let first = req.body.firstname;
  let last = req.body.lastname;
  let count = countletter(first, last);
  console.log(count);
  res.render("index.ejs", {'totalcount': count });
});

app.listen(port, () => {
  console.log(`the server is running ${port}`);
});
