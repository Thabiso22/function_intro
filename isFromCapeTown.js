const assert = require("assert");
function isFromCapeTown (CapeTown) {
var registrationPlate = CapeTown.endsWith('CA');
return registrationPlate;
}
console.log(isFromCapeTown('12345CA'));
assert.equal(isFromCapeTown('12345CA'),true);
