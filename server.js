const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'prabisha',
  password: 'Prabisha@2024!',
  database: 'globalindians',
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/submit', (req, res) => {
  const { name, email, phone, message } = req.body;

  const query = `INSERT INTO contact_forms (name, email, phone, message) VALUES (?, ?, ?, ?)`;
  db.query(query, [name, email, phone, message], err => {
    if (err) {
      console.error('MySQL query error:', err);
      return res.status(500).json({ error: 'An error occurred' });
    }
    return res.status(200).json({ message: 'Form submitted successfully' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
