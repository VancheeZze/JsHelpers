//
// Return true if the given string is a palindrome. Otherwise, return false.
//


function palindrome(str: string) {
  let escaped = str.toLowerCase().replace(/[\W_]/g, "");
  return escaped.split('').reverse().join('') == escaped;
}



palindrome("not a palindrome"); // --> false
