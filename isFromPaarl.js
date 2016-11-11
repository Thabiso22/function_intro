const assert = require("assert");
function isFromPaarl(Paarl) {
  registrationPlate = Paarl.startsWith('CJ');
  return registrationPlate;
}
console.log(isFromPaarl('CJ 2255'));
assert.equal(isFromPaarl('CJ 2255'),true);
