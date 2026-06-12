const express = require('express');
const mongoose = require('mongoose');
const Url = require('./models/Url');
const shortid = require('shortid');
const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/url_shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// POST /shorten - Create a shortened URL
app.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = shortid.generate();
  const shortUrl = `http://localhost:3000/${shortCode}`;

  const url = new Url({ longUrl, shortUrl, shortCode });
  await url.save();

  res.json({ shortUrl });
});

// GET /:shortCode - Redirect to original URL
app.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params;
  const url = await Url.findOne({ shortCode });

  if (url) {
    return res.redirect(url.longUrl);
  } else {
    return res.status(404).send('URL not found');
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
