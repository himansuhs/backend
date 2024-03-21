import express from "express";
import bodyParser from "body-parser";

const port = 5500;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

const messages = {
  sunday: "go to beach",
  monday: "start the week",
  tuesday: "start the week",
  wednesday: "start the week",
  thursday: "start the week",
  friday: "start the week",
  saturday: "start the week",
};
app.post("/submit", (req, res) => {
  const day = req.body.day;
  let msg;
  switch (day) {
    case "sunday":
      msg = messages.sunday;

      break;

    default:
      break;
  }
  res.render("index.ejs", { message: msg });
});
app.listen(port, () => {
  console.log(`server is runnung ${port}`);
});
