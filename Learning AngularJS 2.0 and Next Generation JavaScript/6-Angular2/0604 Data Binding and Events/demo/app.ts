/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  properties: ["dude"],
  selector: 'foo'
})
@View({
  template: `
    <div>
      <span>{{ mydata }} - {{ dude.name }} ({{ dude.age }}), {{ dude.politicalBelief }}</span>
      <button (click)="age()">Gittin' OLDER</button>
    </div>
  `
})
class Foo {
  constructor() {
    this.mydata = "I am a foo component!";
  },
  mydata: string,
  age() {
    ++this.dude.age;
  }
}

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  directives: [Foo],
  template: `
    <div>
      <h1>Top-level component {{ person.name }}</h1>
      <foo [dude]="person"></foo>
      <foo [dude]="person"></foo>
    </div>
  `
})
// Component controller
class MyAppComponent {
  constructor() {
    this.person = {
      name: 'Jake Hsu',
      age: 25,
      politicalBelief: 'vegan'
    };
  },
  person: {
    name: string,
    age: number,
    politicalBelief: string
  }
}

bootstrap(MyAppComponent);

