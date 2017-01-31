var express = require("express");
var router = express.Router();
var encryptjson = require("../flutterwave-service/encryptapi");

router.post('/encrypt', encryptjson.encryptJson);


module.exports = router;
