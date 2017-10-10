//
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//

function truthCheck(collection: any[], pre: string) {
  return collection.every(element => {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // --> true