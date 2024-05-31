//1
function celsiusToFahrenheit(celsius){
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77


//2
function isEven(num) {
  if(num % 2 === 0){
    return true;
  }

  return false;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false


//3
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30


//4
function findSmallestNum(arr) {
  const smallNum = arr.reduce((acc,num) => acc < num ? acc : num, arr[0]);
  return smallNum;
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5


//5
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0 ; i < str.length ; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U"){
      count++;
    }
  }
  return count; 
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3


//6
function getFirstElement(arr) {
  return arr.at(0);
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"


// //7
function isArrayEmpty(arr) {
  if(arr.length > 0){
    return false;
  }

  return true;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false


// //8
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  
  if(num >= 2){
    let fact = 1;
    for(let i = 2 ; i <= num ; i++){
      fact *= i;
    }
    return fact;
  }
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040


// //9
function reverseString(str) {
  const strReveres = str.split("").reverse().join("");
  return strReveres;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"


// //10
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"


// //11
function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5


// //12
function mergeArrays(arr1, arr2) {
  return [...arr1,...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]


// //13
function getLastElement(arr) {
  return arr.at(-1);
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"


// //14
function getFirstCharacter(str) {
  return str.at(0);
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"


// //15
function sumArray(arr) {
  return arr.reduce((acc,num) => acc + num,0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5






