//
// Remove all elements from the initial array that are of the same value as arguments.
//


function destroyer(arr: any[], ...argmnts) {
  var args = Array.prototype.slice.call(argmnts);
  
  return arr.filter(function(item) {
    return !args.includes(item);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // --> [1,1]