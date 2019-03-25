var express = require('express');
var router = express.Router();

/* GET users listing. *//*配置路由 */
router.get('/', function(req, res, next) {
  res.send('hello ljc');
});
router.get('/test', function(req, res, next) {
  res.send('又是我');
});


module.exports = router;
