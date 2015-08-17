// Demonstration of local symbol basics
var mySym = Symbol("hello there");
console.log(typeof mySym); // symbol
    
var myObj = {};
myObj[mySym] = "foo";
console.log(myObj);  // {}
console.log(Object.getOwnPropertySymbols(myObj));  // [Symbol(hello there)]
var recoveredSym = Object.getOwnPropertySymbols(myObj)[0];
console.log(myObj[recoveredSym]);  // foo
    
    
// Demonstration of global symbols
var myGlobSym;
function a() {
  myGlobSym = Symbol.for("hello there");  
}
function b() {
  console.log(myGlobSym === Symbol.for("hello there"));  // true
  console.log(Symbol.keyFor(myGlobSym));  // hello there
}   
a();
b();
