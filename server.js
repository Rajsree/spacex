const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/spacex-program'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/spacex-program/index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('Gator app listening on port 8080!'));