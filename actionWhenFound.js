// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach( function (item, theIndex) {
    if (item == "Waldo") {
      found(theIndex);
    }
  });

  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
}

function actionWhenFound(theIndex) {
  console.log("Found him at index " + theIndex + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston", "Waldo"], actionWhenFound);