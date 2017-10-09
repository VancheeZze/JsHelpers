//
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//


function searchAndReplace(str: string, before: string, after: string) {
  let arr = str.split(' ');
  let replaceIndex = arr.indexOf(before);
  
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  arr.splice(replaceIndex, 1, after);
  return arr.join(' ');
}

searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // --> "He is Sitting on the couch"