
// Some examples of how to deal with array.sort()

var array = [10, 2, 5, 1, 9];

console.log('Array object before:\n', array);

array.sort( function (a, b) {
  return a-b;
});

console.log('Array object after:\n', array + '\n');


// Now do some advanced sorting. Next exercise.
// Write a sorting function (sometimes called a custom comparator), that sorts the array below first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
console.log('Students object before:\n', students);

students.sort( function (a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  else if (nameA > nameB) {
    return 1;
  }
  // names are equal
  else {
    a.age - b.age;
  }

  //return 0;
});

console.log('Students object after:\n', students);
