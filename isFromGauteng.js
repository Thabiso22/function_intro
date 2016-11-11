const assert = require ("assert");
function isFromGauteng (registration)   {
var registrationNumber = registration.endsWith("GP");
return registrationNumber;

}
console.log (isFromGauteng("DR 122 TY GP"));
assert.equal(isFromGauteng('DR 122 TY GP'),true);
