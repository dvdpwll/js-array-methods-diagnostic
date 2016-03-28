'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
A callback is a function passed to an array method to
determine the action put upon each element of an array being iterated over.

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
`for` loops can:

- be used for more than just arrays
- can be broken out of

`forEach`

- cannot be broken out of
- will not return anything by nature

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
arr.reduce((a, b) => a + b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  let testPass = false;
  for (let i = 0; i < array.length; i++) {
    if(calback(array[i]) === true) {
      testPass = true;
    }
  }
  return testPass;
};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let passingElements = [];
  for (let i = 0; i < array.length; i++) {
    if(calback(array[i]) === true) {
      passingElements.push(array[i]);
    }
  }
  return passingElements;
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
arr.every(a => typeof a === 'number');
