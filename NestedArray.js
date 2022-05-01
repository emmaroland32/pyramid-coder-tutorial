/* Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.

canNest([1, 2, 3, 4], [0, 6]) ➞ true
canNest([3, 1], [4, 0]) ➞ true

*/

function CanItBeNested(arr1 = [], arr2 = []) {
  if (arr1.length < 1 || arr2.length < 1) {
    return 'Array Value cannot be empty';
  }

  const arr1Min = Math.min(...arr1);

  const arr2Min = Math.min(...arr2);

  const arr1Max = Math.max(...arr1);

  const arr2Max = Math.max(...arr2);

  if (arr1Min > arr2Min || arr1Max < arr2Max) {
    return true;
  } else {
    return false;
  }
}
console.log(CanItBeNested([1, 2, 3, 4], [0, 6]));

// // Spread
// const array5 = [7, 2, 9, 7];
// const numbers = {...array5};
// Math.min(...array5);
// Math.min(7, 2, 9, 7);
