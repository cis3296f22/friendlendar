const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const express = require("express");
const app = express();

let DB;
open({
  filename: './database.sqlite',
  driver: sqlite3.Database
}).then((db) => {
  DB = db;
  DB.run('CREATE TABLE IF NOT EXISTS numbers (num INT)');
});

app.get('/addNumber', async (req, res) => {
  await DB.run('INSERT INTO numbers (num) VALUES (?)',
    Math.floor(Math.random() * 100)
  )
  res.end('Added number');
});
app.get('/deletenums', async (req, res) => {
  await DB.exec('DELETE FROM numbers');
  res.end('Deleted');
});

app.use(express.static('./build'));
app.listen(80, () => console.log('listening on port 80'));