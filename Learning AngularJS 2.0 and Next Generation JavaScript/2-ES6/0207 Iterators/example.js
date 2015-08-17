var myArr = new String("heyyou");
    
myArr[Symbol.iterator] = function() {
  var stateVar = 0;
  return {
    next() {
      ++stateVar;
      return {
        value: stateVar,
        done: false
      };
    }
  };    
}
    
var iter = myArr[Symbol.iterator]();
    
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
    
var runningSum = {
  [Symbol.iterator]() {
    var idx = 0, sum = 0;
    return {
      next() {
        sum += idx;
        ++idx;
        return {
          done: sum > 100,
          value: sum
        };
      }
    };
  }  
};
    
for (let s of runningSum) {
  console.log(s);
}
