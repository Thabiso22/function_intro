var assert = require ("assert");
var isWeekday = function (days) {
var weekend = !days.startsWith ("S");
console.log(weekend);
return weekend;

}
console.log(isWeekday('Tuesday'));
assert.equal(isWeekday('Tuesday'), true);
