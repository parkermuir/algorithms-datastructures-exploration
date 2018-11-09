/*
905

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

const parity = ( arr ) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 2 === 0) {
      results.unshift(num);
    } else {
      results.push(num);
    }
  }
  return results;
};

console.log(parity([3, 1, 7, 8, 9, 10, 2, 4]));

