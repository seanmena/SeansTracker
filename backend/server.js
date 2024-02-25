const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5500;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("server running");
});

app.get("/", (req, res) => {
  res.send("hello from server");
});
