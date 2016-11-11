var assert = require ("assert");
function isFrom (regNum,location) {
 var results = regNum.startsWith(location);

return results;



};
console.log (isFrom("CA 2222","CA"));
console.log(isFrom("ND 2222","ND"));
assert.equal(isFrom("CA 2222","CA"),true);
