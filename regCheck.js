
var assert = require('assert');
var regCheck = function (regNum,location) {
var results = regNum.startsWith(location);
return results;
  }

console.log(regCheck("GP123","GP"));
console.log(regCheck("L666","L"));
console.log(regCheck("EC56766","EC"));
console.log(regCheck("MP9767","MP"));
assert.equal(regCheck("GP123","GP"),true);
