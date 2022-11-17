const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const express = require("express");
// body parser to parse html
const bodyParser = require('body-parser');
const app = express();

// parser 
app.use(bodyParser.json());

let DB;
open({
  filename: './database.sqlite',
  driver: sqlite3.Database
}).then(async (db) => {
  DB = db;
  await DB.run('CREATE TABLE IF NOT EXISTS numbers (num INT)');
  await DB.run('CREATE TABLE IF NOT EXISTS dateEntry (start INT, end INT)');
  await DB.run('DELETE FROM dateEntry WHERE start IS NULL');
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

// post method to insert into database from html
app.post('/insert', async (req, res) => {
  const {start, end} = req.body;
  if(start > end){
    res.statusCode = 400;
    res.end();
    return;
  }
  console.log(start, end);
  await DB.run('INSERT INTO dateEntry (start, end) VALUES (?,?) ',
    start, end
  )
  res.end(JSON.stringify({Text: 'Added to database'}));
});

app.use(express.static('./build'));
app.listen(80, () => {console.log('listening on port 80'); console.log('http://127.0.0.1:80');});