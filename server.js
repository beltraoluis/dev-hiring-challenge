const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/dev-hiring-challenge'));
app.listen(process.env.PORT || 8080);

// PathLocationStrategy

app.get('*', function (req, res) {
  const index = path.join(__dirname + '/dist/dev-hiring-challenge/index.html');
  res.sendFile(index);
});

console.log('Server running!')
