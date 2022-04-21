# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mohammedmahdi/lotide`

**Require it:**

`const _ = require('@mohammedmahdi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: retrun the first element in array.
* `tail`: return an array without the first element.
* `middle`: return the middle element in an array.
* `map`: return a new array based on the results of the callback function.
* `flatten`: take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `findKeyByValue`: search for a key on an object where its value matches a given value.
* `without`: return a subset of a given array, removing unwanted elements.
* `countOnly`: return a proper report on all the strings found in the input array, and their respective counts.
* `countLetters`: take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions`: eturn all the indices (zero-based positions) in the string where each character is found.
* `eqObjects`: take in two objects and returns true or false, based on a perfect match.
* `takeUntil`: return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `findKey`: return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `assertEqual`: compare the two values it takes in and print out a message if they match or not.
* `assertObjectsEqual`: test functions that return objects.

