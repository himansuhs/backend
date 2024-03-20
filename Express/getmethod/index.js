import express from "express";
const app = express();
const port = 5500;
app.get("/", (req, res) => {
  res.send("<h1>Hello people</h1> <h2>This is the home page</h2>");
  console.log(req.rawHeaders);
});
app.get("/contact", (req, res) => {
  res.send("contact us aa");
});
app.post("/register", (req, res) => {
  res.sendStatus(200);
});
app.post("/login", (req, res) => {
  res.sendStatus(401);
});
app.listen(port, () => {
  console.log(`the server is up and running on port number ${port}`);
});
