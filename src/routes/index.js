const express = require('express')
const router = new express.Router();
const baseUrl = '/api';
const studentRoute = require('./studentRoute');

router.use(baseUrl,studentRoute)

module.exports = router;