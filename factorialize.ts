//
// Return the factorial of the provided integer.
//


function factorialize(num: number) {
  if (num <= 0) return 1;
  return (num * factorialize(num - 1));
}

factorialize(5); // --> 120