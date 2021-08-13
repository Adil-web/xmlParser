const {Router} = require('express');
const nofit = require('./route/nofit.api')
const first = require('./route/first_resp.api')
const request = require('./route/request.api');
const router = Router();
router.use('/nofit', nofit)
router.use('/first', first);
router.use('/request', request);
module.exports = router