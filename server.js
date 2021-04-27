const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./db");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

app.listen(PORT, () => {
  console.log(`Express seerver listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("This is the root");
});

/* HTTP request is sent to the http://localhost:3000/
call the handler function */