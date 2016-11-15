const assert = require("assert");
function isTuesday(day) {
var whatDay = day.startsWith ("T");
return whatDay;
}
console.log(isTuesday ("Tuesday"));
assert.equal(isTuesday('Tuesday'),true);
