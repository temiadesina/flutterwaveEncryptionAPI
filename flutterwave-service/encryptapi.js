var encrypt = require("./encrypt");


module.exports = {
  encryptJson: function(req, res) {
    var returnObject = {};

    var payload = req.body.jsonbody;
    var encrypt_key = req.body.encryption_key;
    for (var prop in payload){
      if (payload.hasOwnProperty(prop)) {
        var value = payload[prop];
        returnObject[prop] = encrypt(encrypt_key, value)
      }

    }

     return res.json(returnObject);
    //console.log(returnObject);
  }



}
