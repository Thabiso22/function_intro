const assert = require ("assert");
function sameWeekday (dateOne,dateTwo){

var date1 = new Date (dateOne);
var date2 = new Date (dateTwo);
return date1.getDay() == date2.getDay();
}
console.log(sameWeekday("2016 09 02","2017 06 01"));
assert.equal(sameWeekday("2016 09 02","2017 06 01"),false);
