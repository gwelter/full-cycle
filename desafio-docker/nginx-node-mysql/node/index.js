const util = require("util");
const express = require("express");
const mysql = require("mysql");
const app = express();

const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

function makeDb() {
  const connection = mysql.createConnection(config);
  return {
    query(sql, args) {
      return util.promisify(connection.query).call(connection, sql, args);
    },
    close() {
      return util.promisify(connection.end).call(connection);
    },
  };
}

const db = makeDb();

const htmlNames = (names) => `
<ul>
  ${names.map((name) => `<li>${name}</li>`).join("\n")}
</ul>
`;

const randomNames = [
  "Guilherme",
  "Gustavo",
  "Mirian",
  "João",
  "Jorge",
  "Aline",
  "Melissa",
  "Bruna",
  "Bruno",
  "Gabriel",
  "Matheus",
  "Thiago",
];

function getRandomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

async function saveNameToDB(name) {
  const sql = `INSERT INTO people (name) values ('${name}')`;
  const rows = await db.query(sql);
  console.log({ rows });
}

async function getNamesFromDB() {
  const sql = `SELECT name FROM people`;
  const rows = await db.query(sql);
  var resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
  return resultArray.map((row) => row.name);
}

app.get("/", async (req, res) => {
  const randomName = getRandomName(randomNames);
  await saveNameToDB(randomName);

  const names = await getNamesFromDB();

  let html = `<h1>Full Cycle Rocks!</h1>`;
  html += htmlNames(names);

  res.set("Content-Type", "text/html");
  res.end(Buffer.from(html));
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
