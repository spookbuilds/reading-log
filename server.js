const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hey Spook");
});

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});