const assert = require ("assert");
function dayToday (){
var now = new Date ();
var today = now.getDay();
console.log(today);
return today;

}
dayToday("2016 11 14");
assert.equal(dayToday("2016 11 14"),1);
