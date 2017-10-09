//
//  Looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument).
//


function whatIsInAName(collection: any[], source: any) {
  let arr = [];
  let srcKeys = Object.keys(source);

  return collection.filter(obj => {
    return srcKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // --> [{ first: "Tybalt", last: "Capulet" }]