//
// Return the remaining elements of an array after chopping off n elements from the head.
//


function slasher(arr: any[], howMany: number) {
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2); // --> [3]