//
// Flatten a nested arrays.
//


function flattenArrays(arr: any[]) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flattenArrays(flat) : flat;
}

flattenArrays([1, [2], [3, [[4]]]]); // --> [1,2,3,4]