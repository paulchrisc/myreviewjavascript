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
const isPrimeNumber = function (number) {
  let isPrime = true;
  if (number === 0) {
    console.log("Number is not a composite or a prime number");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${number} is a Prime Number`);
    } else {
      console.log(`${number} is not a Prime Number`);
    }
  } else {
    console.log(`The number is not a prime number`);
  }
};

isPrimeNumber(23);
