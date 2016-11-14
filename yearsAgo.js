const assert = require("assert");
function yearsAgo (year1,year2) {
var firstYear = new Date (year1);
var secYear   = new Date (year2);
var results = Number(firstYear.getFullYear()-secYear.getFullYear());
console.log(results);
return results;

}
yearsAgo("2002 02 09","2006 05 06");
assert.equal(yearsAgo ("2002 02 09","2006 05 06"),-4);
