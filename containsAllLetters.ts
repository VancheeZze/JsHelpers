//
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//


function containsAllLetters(arr: string[]) {
  let lett = arr[1].split('');
  
  for (let i = 0; i < lett.length; i++) {
    if (arr[0].toLowerCase().indexOf(lett[i].toLowerCase()) === -1) return false;
  }
  
  return true;
}

containsAllLetters(["voodoo", "no"]); // --> false
