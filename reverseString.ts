//
// Reverse the provided string.
//


function reverseString(str: string) {
  return str.split("").reverse().join("");
}

reverseString("hello"); // --> "olleh"