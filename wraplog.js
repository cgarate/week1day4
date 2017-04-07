
// Create a function called wrapLog() that takes in a function (callback) and a string (name) and returns a function that does the
// same thing as callback but also logs the name, input parameters, and return value of the callback function

var wrapLog = function (callback, name) {

  return function() {
    //console.log(arguments);
    var info = name + "(" + arguments[0] + "," + arguments[1] + ") => " + callback(arguments[0], arguments[1]);
    console.log(info);
  }
};

var sum = function (a,b) { return a + b; };

var logSum = wrapLog(sum, "sum");

// These calls work only after I added the ...return function()... in wraplog.
// Explanation is that logSum will be assigned a function only if wrapLog returns a function object.
//
logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5