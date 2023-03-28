// const numberProcessor = function (num1, num2) {
//   let sumOfNumbers = num1 + num2;
//   let diffOfNumbers = num1 - num2;
//   let productOfNumbers = num1 * num2;
//   let quotientOfNumbers = num1 / num2;
//   console.log(`The sum of ${num1} and ${num2} is ${sumOfNumbers}`);
//   console.log(`The difference of ${num1} and ${num2} is ${diffOfNumbers}`);
//   console.log(`The product of ${num1} and ${num2} is ${productOfNumbers}`);
//   console.log(`The quotient of ${num1} and ${num2} is ${quotientOfNumbers}`);
// };

// const numberInput = (10, 5);
// const display = numberProcessor(10, 5);

// const arrNum = [1, 2, 3, 4];

// const calculateSum = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum;
// };

// const double = function (x) {};

// calculateSum(arrNum);

// const numArray = [1, 2, 3, 4, 5, 6];

// const evenSelector = function (takesarray) {
//   let evenArray = [];
//   for (let i = 0; i < takesarray.length; i++) {
//     if (takesarray[i] % 2 === 0) {
//       evenArray.push(takesarray[i]);
//     }
//   }
//   return evenArray;
// };

// const result = evenSelector(numArray);
// console.log(result);

// const reverseString = function (str) {
//   let splitString = str.split("");
//   let reversed = splitString.reverse();
//   let join = reversed.join("");

//   return join;
// };

// console.log(reverseString("Hello"));

// const isPalindrome = function (str) {
//   let splitString = str.split("");
//   let reversed = splitString.reverse();
//   let reversedString = reversed.join("");

//   if (reversedString === str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("birdrib"));

// const findMax = function (myArray) {
//   let max = myArray[0];
//   for (let i = 1; i < myArray.length; i++) {
//     if (myArray[i] > max) {
//       max = myArray[i];
//     }
//   }
//   return max;
// };

// const numbers = [3, 6, , 9, 2, 5];
// console.log(findMax(numbers));

// const calculateAverage = function (myArray) {
//   let sum = 0;
//   for (let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
//     average = sum / myArray.length;
//   }
//   return average;
// };

// const numbers = [4, 2, 6, 8];
// console.log(calculateAverage(numbers));

// const filterArray = function (numArray) {
//   let evenArray = [];
//   for (let i = 0; i < numArray.length; i++) {
//     if (numArray[i] % 2 === 0) {
//       evenArray.push(numArray[i]);
//     }
//   }
//   return evenArray;
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = filterArray(numbers);
// console.log(result);

// For example, if the input numbers are 3 and 4, the function should return 25 (3^2 + 4^2 = 9 + 16 = 25).

// how to square numbers in javascript
// sum both results

// const sumSquare = function (num1, num2) {
//   let square1 = num1 ** 2;
//   let square2 = num2 ** 2;
//   sum = square1 + square2;
//   return sum;
// };

// console.log(sumSquare(3, 4));

// const reverseWords = function (str) {
//   var splitStr = str.split(" ");
//   var reverseStr = splitStr.reverse();
//   var joinStr = reverseStr.join(" ");

//   return console.log(joinStr);
// };

// reverseWords("Hello World");
// const isPrimeNumber = function (number) {
//   let isPrime = true;
//   if (number === 0) {
//     console.log("Number is not a composite or a prime number");
//   } else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(`${number} is a Prime Number`);
//     } else {
//       console.log(`${number} is not a Prime Number`);
//     }
//   } else {
//     console.log(`The number is not a prime number`);
//   }
// };

// isPrimeNumber(23);

// const checkEvenOdd = function (number) {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

// console.log(checkEvenOdd(5));

// const reverseArray = function (myArray) {
//   let newArray = myArray.reverse();
//   return newArray;
// };

// const array1 = [3, 2, 1];
// const array2 = [45, 6, 77];
// const array3 = [99, 199, 288];
// const array4 = [100, 101, 102];
// console.log(reverseArray(array1));
// console.log(reverseArray(array2));
// console.log(reverseArray(array3));
// console.log(reverseArray(array4));

// Challenge: Write a function that takes in a string and returns the string with all its vowels removed.
// For example, if the input is "hello world", the output should be "hll wrld".

// const multiplyByTwo = function (myArray) {
//   let newArray = [];
//   for (let i = 0; i < myArray.length; i++) {
//     newArray.push(myArray[i] * 2);
//   }

//   return newArray;
// };

// const array1 = [2, 4, 6];
// const array2 = [4, 10, 14];
// console.log(multiplyByTwo(array1));
// console.log(multiplyByTwo(array2));

// const findMax = function (myArray) {
//   let max = myArray[0];
//   for (let i = 0; i < myArray.length; i++) {
//     if (max < myArray[i]) {
//       max = myArray[i];
//     }
//   }
//   return max;
// };

// const numbers = [10, 150, 20, 8];
// findMax(numbers);
// console.log(findMax(numbers));

// const calculateBMI = function (height, weight) {
//   let bmi = (weight / height ** 2 / 100) * 100;

//   return bmi.toFixed(2);
// };
// const height = 1.75;
// const weight = 70;
// console.log(calculateBMI(height, weight));

const sumArray = function (myArray) {
  let sum = 0;
  if (myArray.lenght < 1) {
    return 0;
  } else {
    for (let i = 0; i < myArray.length; i++) {
      sum += myArray[i];
    }
  }
  return console.log(sum);
};
sumArray([1, 2, 3, 4, 5]);
sumArray([10, -5, 3, 8]);
sumArray([]);
