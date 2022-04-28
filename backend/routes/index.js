const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");

router.get('/hello/world', csrfProtection, function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;
