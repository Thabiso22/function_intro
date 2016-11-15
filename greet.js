

const assert = require ("assert");
function greet(name) {
    return ("hello" + name);
}

console.log (greet("John"));
assert.equal(greet("John"),"helloJohn");
