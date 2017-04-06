
// Create your own version of a map function.
// It should take two arguments, the array to map and a callback function.

var map = function (array, f) {
  return array.map(f);
}

var words = ["ground", "control", "to", "major", "tom"];

var newArray = map(words, function(word) {
  return word.length;
});

console.log(newArray);