// JavaScript Basic Problem Solving 01

// (PROBLEM 01): Create a variable called carName, assign the value Volvo to it 

let carName = "Volvo";

// (PEOBLEM 02): On one single line, declare three variables with the following names and values.

let firstName = "John"; 
lastName = "Doe"; 
age = 35; 

// (PROBLEM 03): Use the correct assignment operator that will result in x being 50 (same as x = x * y).

x = 10;
y = 5;
x *= y; // x = x * y (x will be 50)

// (PROBLEM 04): Use comments to describe the correct data type of the following variables 

let length = 16; // data type: Number
let lastName = "Johnson"; // data type: String

const X = {
  firstName: "John",
  lastName: "Doe", // data type: String
}; // data type: Object

// (PROBLEM 05): Execute the function named myFunction. 

function myFunction() {
    alert("Hello World!");
  }
  
  // Call the function
  myFunction();

  // Output: When you run this in a web browser, a pop-up alert will appear with the message "Hello World!"

  // 2nd part 

  function myFunction() {
    console.log("Hello World!");
  }
  
  myFunction();

  // Output: When you run this in a web browser, the message "Hello World!" will be printed
   
// (PROBLEM 06): Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50"). 

// Create the object
const person = {
    name: "John",
    age: 50
  };
  
  // Access the object and display the alert
  alert(person.name + " is " + person.age);

  // Output: When you run this in a web browser, a pop-up alert will appear with the message

  // (PROBLEM 07): The <button> element should do something when someone clicks on it. Try to fix it! 

<button onclick="alert('Hello World!')">Click me!</button>

// (PROBLEM 08): Array Related Question 

// 1. Alert the number of items in the array:

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length); // Alerts 3

// 2. Change the first item of Brand to "Ford":

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford"; // Change the first item to "Ford"
console.log(Brand); // Outputs: ["Ford", "Jeep", "Mercedes"]

// (PROBLEM 08): Math Related Problems

// 1. Create a Random Number:

let randomNumber = Math.random();
console.log(randomNumber); // Outputs a random number, e.g., 0.725391

// 2. Return the Largest Number of 10 and 20:

let largestNumber = Math.max(10, 20);
console.log(largestNumber); // Outputs: 20

// 3. Get the Square Root of 9:

let squareRoot = Math.sqrt(9);
console.log(squareRoot); // Outputs: 3

// (PROBLEM 09): comparison operator related problems!

// 1. Alert true when x is greater than y:

let x = 10;
let y = 5;

alert(x > y); // Outputs: true

// 2. Use the correct conditional (ternary) operator:

let age = 17; // You can change this value to test
alert(age < 18 ? "Too young" : "Old enough");










// JavaScript Basic Problem Solving 02

// (PROBLEM 01): Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77

  // (PROBLEM 02): Write a function to check if a number is even. The function should take a single argument, which is the number to check.

  function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false

  // (PROBLEM 03): Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30

  // (PROBLEM 04): Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// (PROBLEM 05): Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3

// (PROBLEM 06): Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"

// (PROBLEM 07): Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false


// (PROBLEM 08): Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorialize(num) {
    if (num === 0 || num === 1) return 1; // Base case
    return num * factorialize(num - 1); // Recursive case
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

// (PROBLEM 09): Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  
// (PROBLEM 10): Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"

// (PROBLEM 11): Write a function to find the length of a string. The function should take a single argument, which is the string.

function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5

// (PROBLEM 12): Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// (PROBLEM 13): Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"

// (PROBLEM 14): Write a function to get the first character of a string. The function should take a single argument, which is the string.

function getFirstCharacter(str) {
    return str.charAt(0); // or str[0]
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"

// (PROBLEM 15): Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  