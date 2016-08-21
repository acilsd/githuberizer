/*eslint no-console: "off"*/
const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

server.listen(port);

console.log('Server listening on:', port);
