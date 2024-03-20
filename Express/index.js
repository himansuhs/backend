import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("hello people");
});
app.listen(port, () => {
  console.log(`the server is up and running on port number ${port}`);
});
