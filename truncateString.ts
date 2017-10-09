//
// runcate a string (first argument) if it is longer than the given maximum string length (second argument).
//


function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); // --> "A-tisket..."