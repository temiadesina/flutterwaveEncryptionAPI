# flutterwaveEncryptionAPI

This is an encryption api that turns any json payload you send to it using the following format:

```
{
  "encryption_key": "// put your encryption key here",
  "merchantid": "// add your merchant id here " <OPTIONAL>
  "jsonbody": {
            "// your JSON body here" 
          }
 }
``` 

You can use this functionality by making *[POST]* request with the jsonpayload structure above to https://flutter-encrypt.herokuapp.com/process/encrypt

> Project improvements are welcomed, for example making it also accept values from forms as key:values.
