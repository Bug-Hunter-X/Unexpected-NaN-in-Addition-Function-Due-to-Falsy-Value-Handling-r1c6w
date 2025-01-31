function foo(a, b) {
  // Check if either a or b is falsy using loose comparison
  if (!a || !b) {
    return 0; // Handle all falsy values
  }
  return Number(a) + Number(b); //Ensure both are numbers to avoid NaN
}

console.log(foo(0, 1)); // 0
console.log(foo(1, 0)); // 0
console.log(foo(false, 1)); // 1
console.log(foo(1, false)); // 1
console.log(foo('',1)); //1
console.log(foo(1,'')); //1