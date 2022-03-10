const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Nikola Tesla',
  },
  {
    id: 1,
    name: 'Sir Isaac Newton',
  },
  {
    id: 2,
    name: 'Albert Einstein',
  },
];

// middleware
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next(); // must always include the next funtion

  // actions on response go here
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get('/', (req, res) => {
  res.send('Express installed');
});

app.get('/friends', (req, res) => {
  // res.send(friends);  << this works, but below is better
  res.json(friends); // express treats this as JSON data
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = req.params.friendId;
  // validate
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
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
