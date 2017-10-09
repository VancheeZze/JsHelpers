# JsHelpers

This is the list of TypeScript small help functions, basic algorithms to refer to.

### Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

`bouncer.ts`:
```ts
	bouncer([7, "ate", "", false, 9]); // --> [7, "ate", 9]
```