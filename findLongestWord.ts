//
// Return the length of the longest word in the provided sentence.
//

function findLongestWord(str: string) {
  let arr = str.split(' ');
  let longest = 0;
  
  for (let i = arr.length - 1; i >= 0; i--) {
	if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // --> 6