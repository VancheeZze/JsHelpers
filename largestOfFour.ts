//
// Return an array consisting of the largest number from each provided sub-array.
//

function largestOfFour(arr: any[]) {
  let result = [];
  
  for (let i = 0; i <= arr.length-1; i++) {
    result.push(Math.max.apply(null, arr[i] ));
  }
  
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // --> [5, 27, 39, 1001]