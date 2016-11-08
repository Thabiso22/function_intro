const assert = require("assert");

 function countRegNumber (Registration){
  //  var regCount =countRegNumber ('CA 182736,CY 523519,CJ 812328');
var regList = Registration.split (",");
          console.log(regList.length);
         return regList.length;

  }

assert.equal (countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
