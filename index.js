const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

/** Parser for the json format */  
app.use(bodyParser.json());

let DB;
open({
  filename: './database.sqlite',
  driver: sqlite3.Database
}).then(async (db) => {
  DB = db;
  await DB.run('CREATE TABLE IF NOT EXISTS dateEntry (id INTEGER PRIMARY KEY AUTOINCREMENT, start INT, end INT, title TEXT, description TEXT)');
  await DB.run('DELETE FROM dateEntry WHERE start IS NULL');
});


/**post method to insert into database from the html.*/ 
app.post('/event', async (req, res) => {
  const {start, end, title, description} = req.body;
  if(start > end){
    res.statusCode = 400;
    res.end();
    return;
  }
  console.log(start, end);
  await DB.run('INSERT INTO dateEntry (start, end, title, description) VALUES (?,?,?,?) ',
    start, end, title, description
  )
  res.end(JSON.stringify({Text: 'Added to database'}));
});

/**get the date information from the database.*/
app.get('/event', async (req, res) =>{
  let dates = await DB.all('SELECT * FROM dateEntry')
  res.json(
    {
      Dates: dates
    }
  )
});

/**Deletes an event from the database.*/
app.delete('/event/:id', async(req, res) => {
  await DB.run('DELETE FROM dateEntry WHERE id = ?', req.params.id);
  res.send("DELETE Request Called")
})

// update data
//app.patch() 

/**Launches the production build on the correct port*/
app.use(express.static('./build'));
app.listen(80, () => {console.log('listening on port 80'); console.log('http://127.0.0.1:80');});