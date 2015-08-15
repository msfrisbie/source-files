module Property {
  export var defaultSqFt = 1500;

  export class house {
    constructor(size:number = defaultSqFt) {
      this.size = size;
    }
    size:number
  }
}

var h:Property.House = new Property.House;

console.log(h.size, Property.defaultSqFt);
