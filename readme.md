# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rmcwhae/lotide`

**Require it:**

`const _ = require('@rmcwhae/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of array
* `tail(array)`: removes first element of array
* `middle(array)`: returns the item with the middle index of the input array (odd number of items), or the middle two items (even nember of items)
* `countLetters(string)`: counts the number of letters (ignores spaces)
* `countOnly(allItems, itemsToCount)`: returns how many instances of each string in itemsToCount were found in the allItems array of strings
* `eqArrays(array1, array2)`: returns true if arrays are equivalent
* `eqObjects(object1, object2)`: returns true if objects are equivalent
* `findkey(object, callback)`: returns object key that matches the callback function
* `findKeyByValue(object, value)`: returns object key of given value
* `flatten(array)`: converts nest arrays intwo one-dimensional array
* `letterPositions(string)`: returns an object with the indices of each letter in the string
* `map(array, callback)`: returns array items where the callback returns a truthy value
* `takeUntil(array, callback)`: return a slice of the array with elements taken from the beginning until the callback returns a truthy value
* `without(sourceArray, itemsToRemoveArray)`: removes items in itemsToRemoveArray from sourceArray