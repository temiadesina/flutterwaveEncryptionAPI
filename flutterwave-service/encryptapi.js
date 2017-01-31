var encrypt = require("./encrypt");


module.exports = {
  encryptJson: function(req, res) {
    var returnObject = {};

    var payload = req.body.jsonbody;
    console.log(payload);
    var encrypt_key = req.body.encryption_key;
    console.log(encrypt_key);
    for (var prop in payload){
      if (payload.hasOwnProperty(prop)) {
        console.log(payload[prop]);
        var value = payload[prop];
        returnObject[prop] = encrypt(encrypt_key, value)
      }

    }

    console.log(returnObject);

     return res.json(returnObject);
    //console.log(returnObject);
  }



}
