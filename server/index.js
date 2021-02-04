// packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// initialize app
const app = express();

// env vars
const { PORT, NODE_ENV } = process.env;

// app middleware
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());

if (NODE_ENV === 'production') {
  const clientPath = path.resolve(__dirname, '..', 'client');
  app.use(express.static(path.resolve(clientPath, 'dist')));
}

// routes
app.get('/api/test', (_req, res) => {
  res.send({ msg: 'Proxy running' });
});

app.listen(PORT, console.log(`Server listening on http://localhost:${PORT}`));
