// Demonstration of template string creation
console.log(typeof `mystring`);  // string
console.log(`mystring blah
    123`);  // mystring blah 123

// Demonstration of template string interpolation
var myvalue = 123;
var myfunc = function() {
  return 123;    
};
console.log(`mystring blah ${ myvalue }`);
console.log(`mystring blah ${ 123 }`);
console.log(`mystring blah ${ myfunc() } hello there ${111}`);
    
// Demonstration of tagging functions
function myTagFn(strings, ...values) {
  console.log(strings, strings.raw, values);
  // strings[0] = 'xyz';  // Error: strings is read-only
}    
myTagFn`abc ${ 4+6 } \ndef`  // ['abc ','  def'] ['abc ',' \ndef'] [10]

console.log(String.raw`abc ${ 4+6 } \ndef`);  // abc 10 \ndef
    
// Demonstration of interpolation mutability
var myval = 4;
var str = `a ${ myval+=1 }`;
console.log(myval);  // 5
