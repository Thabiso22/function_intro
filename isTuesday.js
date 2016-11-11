const assert = require("assert");
function isTuesday(day) {
var whatDay = day.endsWith ("y");
return whatDay;
}
console.log(isTuesday ("Tuesday"));
assert.equal(isTuesday('Tuesday'),true);
