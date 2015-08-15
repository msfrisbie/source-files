interface AgeInterface {
  age:number
}

function whatsMyAge(person: AgeInterface) {
  console.log(person.age);
}

class Person implements AgeInterface {
  age:number
}

var p = new Person;

whatsMyAge(p);
