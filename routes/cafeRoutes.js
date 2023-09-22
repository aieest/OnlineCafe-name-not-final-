const express = require('express');

const controller = require('../controllers/cafeController');

const router = express.Router();

router.get('/home', controller.cafe_home);
router.get('/features', controller.cafe_features);
router.get('/order', controller.cafe_order_get);
router.get('/register', controller.cafe_register_get);
router.post('/log-in', controller.cafe_register_post);
router.get('/log-in', controller.cafe_log_get);
router.post('/home', controller.cafe_log_post);


module.exports = router;