const {Router} = require('express');
const control = require('../conrol/request.control');
const router = Router();
router.get('/', control.get); //get all
router.get('/id=:id', control.getId) //get по id
router.get('/ids=:ids', control.getIds); // get по нескольким id
router.post('/add', control.add); // add
module.exports = router