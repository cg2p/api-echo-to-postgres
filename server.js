// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const health = require('@cloudnative/health-connect');
let healthcheck = new health.HealthChecker();

const config = require('./config');

const echo = require('./routes/echo.route');
const probe = require('./routes/probe.route');

var port = process.env.SERVER_PORT || 3000;

// which environment
console.log('NODE_ENV=%s', config.env);

// set-up server
const server = express();

// Bodyparser middleware
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
server.use(bodyParser.json());

// CORS accept
server.use(cors({
  origin: '*',
  credentials: true
}));

// Routes
//API
server.use('/api', echo);

// probe
server.use('/live', health.LivenessEndpoint(healthcheck));
//server.use('/ready', health.ReadinessEndpoint(healthcheck));
server.use('/ready', probe);
server.use('/health', health.HealthEndpoint(healthcheck));

server.listen(port, (err) => {
    if (err) {
      return console.log('Error - could not start server', err)
    }
  
    console.log('Server ready on port %s', port);
  })

  module.exports = server;