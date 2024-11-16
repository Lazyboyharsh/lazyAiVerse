const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./server/db/database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        email TEXT
      )
    `);
  }
});

// Login Route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Missing username or password' });
    }
  
    db.get(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password],
      (err, row) => {
        if (err) {
          res.status(500).json({ error: 'Database error' });
        } else if (row) {
          res.json({ success: true, message: 'Login successful', user: { id: row.id, username: row.username } });
        } else {
          res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
      }
    );
  });
  
// Signup Route
router.post('/signup', (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ success: false, message: 'Missing username, password, or email' });
  }

  db.run(
    'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
    [username, password, email],
    (err) => {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          res.status(400).json({ success: false, message: 'Username already exists' });
        } else {
          res.status(500).json({ error: 'Database error' });
        }
      } else {
        res.json({ success: true, message: 'User registered successfully' });
      }
    }
  );
});

module.exports = router;
