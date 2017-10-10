# JsHelpers

This is the list of TypeScript small help functions, basic algorithms to refer to.



### Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

File: `bouncer.ts`
```ts
bouncer([7, "ate", "", false, 9]); // --> [7, "ate", 9]
```



### Chunk Array In Groups

Splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

File: `chunkArrayInGroups.ts`
```ts
chunkArrayInGroups(["a", "b", "c", "d"], 2); // --> [["a", "b"], ["c", "d"]]
```



### Confirm Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

File: `confirmEnding.ts`
```ts
confirmEnding("Bastian", "n"); // --> true
```



### Contains All Letters In String

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

File: `containsAllLetters.ts`
```ts
containsAllLetters(["voodoo", "no"]); // --> false
```



### Convert Number To Roman

Convert the given number into a roman numeral.

File: `convertToRoman.ts`
```ts
convertToRoman(36); // --> "XXXVI"
```



### Destroyer

Remove all elements from the initial array that are of the same value as arguments.

File: `destroyer.ts`
```ts
destroyer([1, 2, 3, 1, 2, 3], 2, 3); // --> [1,1]
```



### Diff 2 Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.

File: `diffArray.ts`
```ts
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // --> 4
```



### Factorialize

Return the factorial of the provided integer.

File: `factorialize.ts`
```ts
factorialize(5); // --> 120
```



### Find Longest Word

Return the length of the longest word in the provided sentence.

File: `findLongestWord.ts`
```ts
findLongestWord("The quick brown fox jumped over the lazy dog"); // --> 6
```



### Find Missing Letter

Find the missing letter in the passed letter range and return it.

File: `findMissingLetter.ts`
```ts
findMissingLetter("ad"); // --> "bc"
```




### Get Index To Insert

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

File: `getIndexToIns.ts`
```ts
getIndexToIns([2, 20, 10], 19); // --> 2
```



### Largest Of Four

Return an array consisting of the largest number from each provided sub-array.

File: `largestOfFour.ts`
```ts
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // --> [5, 27, 39, 1001]
```



### Palindrome

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

File: `palindrome.ts`
```ts
palindrome("not a palindrome"); // --> false
```



### Repeat String Number Of Times

Repeat a given string (first argument) num times (second argument).

File: `repeatStringNumTimes.ts`
```ts
repeatStringNumTimes("abc", 3); // --> "abcabcabc"
```



### Reverse String

// Reverse the provided string.

File: `reverseString.ts`
```ts
reverseString("hello"); // --> "olleh"
```



### Search And Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

File: `searchAndReplace.ts`
```ts
searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // --> "He is Sitting on the couch"
```



### Slasher

Return the remaining elements of an array after chopping off n elements from the head.

File: `slasher.ts`
```ts
slasher([1, 2, 3], 2); // --> [3]
```



### Spinal Case String

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

File: `spinalCase.ts`
```ts
spinalCase('thisIs SpinalTap'); // --> "this-is-spinal-tap"
```



### Sum All Numbers In A Range

Return the sum of two numbers in array and all numbers between them.

File: `sumAll.ts`
```ts
sumAll([5, 10]); // --> 45
```



### Word Capitalizer

Return the provided string with the first letter of each word capitalized.

File: `titleCase.ts`
```ts
titleCase("I'm a little tea pot"); // --> "I'm A Little Tea Pot"
```



### Truncate String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument).

File: `truncateString.ts`
```ts
truncateString("A-tisket a-tasket A green and yellow basket", 11); // --> "A-tisket..."
```



### Unite Arrays Into One With Unique Values

Takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

File: `uniteUnique.ts`
```ts
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // --> [1,3,2,5,4]
```




### Find In Array Of Objects

Looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument).

File: `whatIsInAName.ts`
```ts
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // --> [{ first: "Tybalt", last: "Capulet" }]
```
