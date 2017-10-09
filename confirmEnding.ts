//
// Check if a string (first argument, str) ends with the given target string (second argument, target).
//

function confirmEnding(str: string, target: string) {
  return str.slice(-target.length) == target;
}

confirmEnding("Bastian", "n"); // --> true
