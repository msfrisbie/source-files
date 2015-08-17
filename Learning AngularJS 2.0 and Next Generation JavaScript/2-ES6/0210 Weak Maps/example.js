// Demonstration of weak map basics
var wm = new WeakMap();
var myObj = {};
wm.set(myObj, "boofar");
console.log(wm.get(myObj));  // boofar
wm.delete(myObj);
console.log(wm.get(myObj));  // undefined


// Demonstration of weak references
var fooMap = new WeakMap();
var fooObj = {
  fooProp: {}    
};
fooMap.set(fooObj.fooProp, "go giants");
console.log(fooMap.get(fooObj.fooProp));  // go giants
delete fooObj.fooProp;
console.log(fooMap.get(fooObj.fooProp));  // undefined
