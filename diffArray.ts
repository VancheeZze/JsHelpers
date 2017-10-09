//
// ompare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
//


function diffArray(arr1: any[], arr2: any[]) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // --> 4