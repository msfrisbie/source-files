var myArr = [1,2,3,4,5];
   
// Demonstration that these are equivalent map expressions
console.log(myArr.map(function(x){return x+1}));
console.log(myArr.map(x => x+1));

// Demonstration that these are equivalent reduce expressions
console.log(myArr.reduce(function(a,b){return a+b}));
console.log(myArr.reduce((a,b) => {return a+b}));
console.log(myArr.reduce((a,b) => a+b));

// Demonstration of anonymous arrow function definition
var addOne = x => x+1;
console.log(addOne(7));
    
function Foo() {
  this.myvals = [1,2,3,4,5];
  // 'this' refers to the Window object when run outside an ES6 transpiler
  this.myvals.map(function() { console.log(this) });
}
var f = new Foo;
    
function Bar() {
  this.myvals = [1,2,3,4,5];
  // 'this' refers to the Bar instance when run inside an ES6 transpiler
  this.myvals.map(() => { console.log(this) });
}
    
var b = new Bar;
