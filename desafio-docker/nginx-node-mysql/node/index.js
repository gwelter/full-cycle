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

const htmlForm = `
<form action="/" method="post">
  <input type="text" placeholder="Nome" name="name" id="name" />
  <button type="submit">Salvar</button>
</form>
`;

const htmlNames = (names) => `
<ul>
  ${names.map((name) => `<li>${name}</li>`).join("\n")}
</ul>
`;

const names = ["Guilherme", "Gustavo", "Mirian"];

app.get("/", (req, res) => {
  let html = "";

  html += htmlForm;
  html += htmlNames(names);

  res.set("Content-Type", "text/html");
  res.end(Buffer.from(html));
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
