const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

app.get('/api/perfumes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM perfumes');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Бэкенд запущен на http://localhost:${PORT}`);
});