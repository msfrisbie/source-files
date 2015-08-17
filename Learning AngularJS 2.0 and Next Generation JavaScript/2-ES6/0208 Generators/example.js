// Demonstration of generator basics
function *myGen(x) {
  console.log(yield x);    
} 
var myIter = myGen(9);
console.log(myIter.next());
console.log(myIter.next(16));
    

// Demonstration of looped generator    
function *sqNumbers(cnt) {
  var x = 0, idx = 0;
  while(idx < cnt) {
    x += (idx * 2) + 1;
    ++idx;
    yield x;
  }
}
                  
for (let sqVal of sqNumbers(8)) {
  console.log(sqVal);                  
}
