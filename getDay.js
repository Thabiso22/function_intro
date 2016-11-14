const assert = require("assert");
function getDay () {
var whatDay =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today = new Date();
return whatDay[today.getDay()];

}
console.log(getDay());
assert.equal((getDay(),"Monday"));
