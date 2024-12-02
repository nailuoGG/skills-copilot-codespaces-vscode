// create web server with express
// create a route for /comments
// send a json response with some comments

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { username: 'Tammy', comment: 'lol that is so funny' },
  { username: 'FishBoi', comment: 'Pls delete this.' },
  { username: 'Haha', comment: 'I like turtles' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});