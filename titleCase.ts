//
// Return the provided string with the first letter of each word capitalized.
//

function titleCase(str: string) {
  let arr = str.split(' ');
  
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
  }
  
  return arr.join(' ');
}

titleCase("I'm a little tea pot"); // --> "I'm A Little Tea Pot"