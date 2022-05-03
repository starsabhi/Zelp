const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { User } = require('../../db/models');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
// const businessRouter = require("./business");

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.use('/business', businessRouter )



module.exports = router;
