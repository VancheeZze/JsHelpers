//
//  Takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//


function uniteUnique(...arg) {
  	let args = Array.prototype.slice.call(arguments);
  	
  	return args.reduce((a,b) => {
  	  return a.concat(b);
  	}).filter((elem, index, self) => {
  	  return index == self.indexOf(elem);
  	});
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // --> [1,3,2,5,4]