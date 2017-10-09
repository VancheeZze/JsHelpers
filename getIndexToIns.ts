//
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
//


function getIndexToIns(arr: number[], num: number) {
  arr.push(num);
  return arr.sort((a, b) => { return a - b; } ).indexOf(num);
}

getIndexToIns([2, 20, 10], 19); // --> 2