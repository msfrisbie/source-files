// Demonstration of default parameters
function foo(x = 7) {
  console.log(x);    
}
foo();  // 7
foo(null);  // null
foo(undefined);  // 7
    
    
// Demonstration of spread operators on iterable objects
console.log([...'abc']);  // ['a','b','c']

var a = [1,2,3];
var b = a.concat([4,5]);
console.log(b);  // [1,2,3,4,5]
var c = [...a,4,5];
console.log(c);  // [1,2,3,4,5]

var d,e,f;
[d,e,...f] = [1,2,3,4,5];
console.log(d,e,f);  // 1 2 [3,4,5]

var g = [1,2], h = [4,5], i;
i = [...g,3,...h];
console.log(i);  // [1,2,3,4,5]


// Demonstration of spread operators with function arguments
function Bar(a,b,c) {
  console.log(a + b + c);
}
var myargs = [3,6,9];
// var b = new Bar.apply(null, myargs);  // invalid use of apply
var b = new Bar(...myargs);  // 18

var myargs2 = [3,6];
var b = new Bar(...myargs2, 10);  // 19

function Baz(a,...myparams) {
  console.log(a+myparams[0]+myparams[1]);
}

var b = new Baz(...myargs2,11);  // 20
