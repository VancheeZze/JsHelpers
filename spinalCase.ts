//
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//


function spinalCase(str: string) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('thisIs SpinalTap'); // --> "this-is-spinal-tap"
