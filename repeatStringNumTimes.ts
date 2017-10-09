//
// Repeat a given string (first argument) num times (second argument).
//

function repeatStringNumTimes(str: string, num: number) {
  if (num < 0)  return str;
  let result = '';

  for (let i = num; i > 0; i--) {
	result += str;
  }
  
  return result;
}

repeatStringNumTimes("abc", 3); // --> "abcabcabc"
