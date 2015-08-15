class Car {
  constructor(licensePlate:string) {
    this.licensePlate = licensePlate;
  }
  private licensePlate:string
  identify():string {
    return "My plate is " + this.licensePlate;
  }
}

var c = new Car('blah');

// This line causes a compilation error
c.licensePlate
