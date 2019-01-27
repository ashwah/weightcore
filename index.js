'use strict';

// TODO: tidy this section!
const mysql = require('mysql');
const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./server/config/db.js'),
  env = require('./server/config/env'),
  router = require('./server/router/index');

const uuidv1 = require('uuid/v1');

const app = express();
const PORT = env.PORT;
const DOC_PORT = env.DOC_PORT;
const WS_PORT = env.WS_PORT;
var path = require('path');

var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: WS_PORT });

// Define shared headers for app.
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db, wss);

// Drop and resync with { force: true }
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});

// Define a static webroot. All files in this folder are served as a regular web
// folder.
app.use(express.static('docroot'))

// Serve the html frontend.
app.get('/view', function(req, res) {
  res.sendFile(path.join(__dirname + '/docroot/view.html'));
});
app.listen(DOC_PORT);

// Generate a UUID to use as a device ID. This route just provides the IDs.
app.get('/generate-id', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var uuid = uuidv1();
  var response = JSON.stringify([uuid])
  res.send(response);
});

// Define a response for the Websocket on-connect function.
wss.on("connection", function(ws) {
  ws.send("Online");
});
