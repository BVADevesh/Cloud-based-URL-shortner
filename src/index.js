const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ ok: true }));

app.post('/shorten', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'missing url' });
  const code = Math.random().toString(36).slice(2,8);
  await pool.query('CREATE TABLE IF NOT EXISTS links (code text PRIMARY KEY, url text, created_at timestamptz DEFAULT now())');
  await pool.query('INSERT INTO links(code,url) VALUES($1,$2) ON CONFLICT DO NOTHING', [code, url]);
  res.json({ short: `${req.protocol}://${req.get('host')}/${code}` });
});

app.get('/:code', async (req, res) => {
  const { code } = req.params;
  const r = await pool.query('SELECT url FROM links WHERE code=$1', [code]);
  if (r.rowCount === 0) return res.status(404).send('Not found');
  res.redirect(r.rows[0].url);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening ${port}`));
