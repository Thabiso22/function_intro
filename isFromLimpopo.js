const assert = require ("assert");
function isFromLimpopo (Registration) {
var plateNumber = Registration.startsWith("DRT");
return plateNumber;

}
console.log(isFromLimpopo("DRT 122 L"));
assert.equal(isFromLimpopo('DRT 122 L'),true);
