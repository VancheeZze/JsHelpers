//
// Splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//


function chunkArrayInGroups(arr: any[], size: number) {
  let counter = 0;
  let result = [];
  let iterations = Math.ceil(arr.length/size);
  
  for (let i = 0; i < iterations; i++) {
	result.push(arr.slice(counter, counter+size));
    counter+=size;
  }
  
  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // --> [["a", "b"], ["c", "d"]]