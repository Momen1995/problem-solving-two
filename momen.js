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
