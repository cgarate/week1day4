

function makeLoadedDice() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;

  return function() {
    var result = list[index];
    index += 1;
    return result;
  }
}

var rollLoadedDice = makeLoadedDice();

console.log(rollLoadedDice());  // 5
console.log(rollLoadedDice());  // 4
console.log(rollLoadedDice());  // 6