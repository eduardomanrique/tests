import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3000;

// Initialize SQLite database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  // Create the 'stuff' table
  db.run('CREATE TABLE stuff (id INTEGER PRIMARY KEY, name TEXT)');

  // Insert random data into the table
  const stmt = db.prepare('INSERT INTO stuff (name) VALUES (?)');
  for (let i = 0; i < 10; i++) {
    stmt.run(`Item ${i}`);
  }
  stmt.finalize();
});

app.get('/', (req, res) => {
  db.all('SELECT * FROM stuff', [], (err, rows) => {
    if (err) {
      res.status(500).send('Error in database operation');
    } else {
      res.json(rows);
    }
  });
});

app.get('/xx', (req, res) => {
  res.send('xxxx');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});