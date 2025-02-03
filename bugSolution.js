function foo(a, b) {
  //Check if both arguments are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null; //Handle non-numeric inputs as null
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(0, 2)); // Output: 2
console.log(foo(1, 0)); // Output: 1
console.log(foo(0, 0)); // Output: 0
console.log(foo(null,2)); //Output: null
console.log(foo(1, null)); //Output: null