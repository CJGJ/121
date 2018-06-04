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
const exphbs = require('express-handlebars');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

// set file path for html code to '/views'
app.set('views', __dirname + '/views');

// set template engine to 'handlebars'
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// set file path for static files to '/static_files/'
app.use(express.static(path.join(__dirname, '/static_files/')));

/*
   // send the rendered view to the client
  res.render('index');

  // if a callback is specified, the rendered HTML string has to be sent explicitly
  res.render('index', function(err, html) {
    res.send(html);
  });

  // pass a local variable to the view
  res.render('user', { name: 'Tobi' }, function(err, html) {
    // ...
  });
*/

// use this library to interface with SQLite databases: https://github.com/mapbox/node-sqlite3
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('voters.db');

//const voteApp = require('./routes/voteApp');
//const representatives = require('./routes/representative');
const login = require('./static_files/js/login');



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


// holds data from POST requests
let data = {
  elections: []
};


app.get('/voters', (req, res) => {
  db.all('SELECT name FROM voter_info', (err, rows) => {
    console.log(rows);
    const allUsernames = rows.map(e => e.name);
    console.log(allUsernames);
    res.send(all);
  });
});

/*app.get('/login', (req, res) => {
  res.render('login');
});*/

app.get('/', (req, res) => {
  console.log('GET home page')
  res.render('voteApp');
});

app.get('/representative', (req, res) => {
  console.log('GET representative page');
  res.render('representative');
});

//app.get('/representative/:name', representatives.view);
app.get('/representative/:name', (req, res) => {
  const name = req.params.name;
  console.log('GET page for ' + name);

  res.render('representative', {"name" : name});
});

app.get('/debate', (req, res) => {
  console.log('GET debate page')
  res.render('debate');
});

app.get('/debateTopic', (req, res) => {
  console.log('GET debateTopic page')
  res.render('debateTopic');
});

app.get('/elections', (req, res) => {
  console.log('GET elections page')
  res.render('elections');
});

app.post('/representative', (req, res) => {
  console.log('POST contests to /representative');
  const data = req.body.data;
  //data.elections.pop();
  data.elections.push(data);
  //res.send(data);
});



// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
