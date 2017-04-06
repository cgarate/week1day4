
var countdownGenerator = function (x) {
  var startAt = x;

  return function () {
    if (startAt > 0) {
      console.log("T-minus " + startAt + "...");
    }
    else if (startAt === 0) {
      console.log("Blast Off!");
    }
    else {
      console.log("Rockets already gone, bub!");
    }
    startAt -= 1;

  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
