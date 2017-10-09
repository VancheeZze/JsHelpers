//
// Return the sum of two numbers in array and all numbers between them.
//


function sumAll(arr: number[]) {
  return Array
          .apply(null, {length: Math.max.apply(null, arr)+1})
          .map(Number.call, Number)
          .slice(Math.min.apply(null, arr))
          .reduce((sum, value) => {
            return sum + value;
          }, 0);
}

sumAll([5, 10]); // --> 45