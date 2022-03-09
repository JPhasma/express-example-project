const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Express installed');
});

app.get('/html', (req, res) => {
  res.send('<h1>Express Messages Route</h1>');
});

app.get('/messages', (req, res) => {
  console.log('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
