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