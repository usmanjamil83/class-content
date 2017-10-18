// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(items) {
  // index into unsorted section, moving right
  var i;
  // index into sorted section, moving left
  var j;

  for (i = 0; i < items.length; i++) {

    // store the current value to insert later (this will be overwritten by the shift)
    var value = items[i];


    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[i] = items[j];
    }

    // insert the value once you've reached the location where items[j] <= value
    items[j + 1] = value;
  }

  return items;
}



// ================================================
// FUNCTION CALL
// ================================================

console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.time("sort");
console.log(insertionSort(array).join(" "));
console.timeEnd("sort");

