// Node.js + Express server backend for petsapp
// version 2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// Prerequisites - first run:
//   npm install
//
// which will look in package.json and install all dependencies
// (e.g., express, sqlite3)
//
// To start the server, run:
//   node server.js
//
// and open the frontend webpage at http://localhost:3000/petsapp.html
//
//
// [optional] you can use nodemon to automatically restart your Node.js
// server whenever your backend files change. https://nodemon.io/
//
// Install globally using:
//
// sudo npm install -g nodemon
//
// and then start the server using:
//   nodemon server.js

const express = require('express');
const app = express();


// use this library to interface with SQLite databases: https://github.com/mapbox/node-sqlite3
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('pets.db');


// put all of your static files (e.g., HTML, CSS, JS, JPG) in the static_files/
// sub-directory, and the server will serve them from there. e.g.,:
//
// http://localhost:3000/petsapp.html
// http://localhost:3000/cat.jpg
//
// will send the file static_files/cat.jpg to the user's web browser
//
// Learn more: http://expressjs.com/en/starter/static-files.html
app.use(express.static('static_files'));

app.get('/voters', (req, res) => {
  db.all('SELECT name FROM voter_info', (err, rows) => {
    console.log(rows);
    const allUsernames = rows.map(e => e.name);
    console.log(allUsernames);
    res.send(all);
  });
});




// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
