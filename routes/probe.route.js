const express = require('express');
const router = express.Router();

// Require the controllers
const probe_controller = require('../controllers/probe.controller');

router.get('/ready', probe_controller.dbReady);

module.exports = router;