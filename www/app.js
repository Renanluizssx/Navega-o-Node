const express = require("express");
const app = express();
app.use(express.static(__dirname + "/pages"));
const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/pages/index.html");
});
app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/pages/sobre.html");
});
app.get("/contato", function (req, res) {
  res.sendFile(__dirname + "/pages/contato.html");
});
app.listen(8099, () => {
  console.log("executando.");
});
