import express from "express";
import bodyParser from "body-parser";

const port = 5500;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
function generateRandom() {
  return Math.floor(Math.random() * 7);
}
const arr = [
  { Activity: "games", noOfPerson: 4 },
  { Activity: "visit", noOfPerson: 4 },
  { Activity: "study", noOfPerson: 4 },
  { Activity: "watch movie", noOfPerson: 4 },
  { Activity: "listen songs", noOfPerson: 4 },
  { Activity: "outdoor games", noOfPerson: 4 },
];
app.post("/submit", (req, res) => {
  const randomN = generateRandom();
  res.render("index.ejs", arr[randomN]);
});

app.listen(port, () => {
  console.log(`server is runnung ${port}`);
});
