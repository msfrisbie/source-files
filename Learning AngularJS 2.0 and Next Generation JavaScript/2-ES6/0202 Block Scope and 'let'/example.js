// Demonstrates let being limited to block scope
if (true) {
  let x = 1;
}    
// console.log(x);  // Error: x is not defined


// Demonstrates var bleeding out of for loop
for (var i=0; i<10; ++i) { console.log(i) };
// console.log(i);  // 10


// Demonstrates let not bleeding out of for loop
for (let i=0; i<10; ++i) { console.log(i) };
// console.log(i);  // Error: i is not defined


// Demonstrates explicit creation of block scope
{
  // Demonstrates temporal dead zone
  // Note: ES6 specifies that 'let' is not hoisted,
  //   behavior may vary by transpiler
  // console.log(j);  // Error: j is not defined
let j = 3;
}
// console.log(j);  // Error: j is not defined
