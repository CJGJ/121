// Node.js + Express server backend for petsapp
// v2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// run this once to create the initial database as the pets.db file
//   node create_database.js

// to clear the database, simply delete the pets.db file:
//   rm pets.db

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('voters.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)

db.serialize(() => {
  // create new database table
  db.run("CREATE TABLE voter_info (name TEXT, state TEXT, party TEXT)");

  // insert 3 rows of data
  db.run("INSERT INTO voter_info VALUES ('Joel', 'New York', 'Republican')");
  db.run("INSERT INTO voter_info VALUES ('Jan', 'California', 'Democrat')");
  db.run("INSERT INTO voter_info VALUES ('German', 'Oregon', 'Libertarian')");

  console.log('Successfully created the voter_info table in voters.db');

  // print to check contents
  db.each("SELECT name, state, party FROM voter_info", (err, row) => {
    console.log(row.name + " | " + row.state + " | " + row.party);
  });
});

db.close();
