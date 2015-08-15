class Car {
  constructor(licensePlate) {
    this.licensePlate_ = licensePlate;  
  }    
  identify() {
    console.log(`My plate is ${this.licensePlate_} and I am ${this.color}`);  
  }
  static findLicense(car) {
    console.log(car.licensePlate_);
  }  
}

class Ferrari extends Car {
  constructor(licensePlate, color) {
    super(licensePlate);
    this.color = color;
  }    
  drive() {
    super.identify();  
  }
  get color() { return this.color_ }
  set color(c) { this.color_ = 'red' }
}
    
var myCar = new Ferrari('1337h4x', 'blue');
myCar.identify();
myCar.drive();
Car.findLicense(myCar);
