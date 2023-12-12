const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/*', (req, res) => {
  //
});

app.post('/*', (req, res) => {
  //
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
