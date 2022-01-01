const express = require("express");
// const mysql = require("mysql");
const app = express();

const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

// const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  res.send("Full Cycle");
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
