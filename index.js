'use strict';

const mysql = require('mysql');
const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./server/config/db.js'),
  env = require('./server/config/env'),
  router = require('./server/router/index');


const app = express();
const PORT = env.PORT;
const DOC_PORT = env.DOC_PORT;
const WS_PORT = env.WS_PORT;
var path = require('path');

var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: WS_PORT });

app.use(morgan('combined'));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header('Content-Type', 'application/json');
//   next();
// });

router(app, db, wss);

// Drop and resync with { force: true }
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});

app.use(express.static('docroot'))

// Serve the html frontend.
app.get('/view',function(req,res){
  res.sendFile(path.join(__dirname+'/docroot/view.html'));
});
app.listen(DOC_PORT);


wss.on("connection", function(ws) {
  ws.send("Online");
});
