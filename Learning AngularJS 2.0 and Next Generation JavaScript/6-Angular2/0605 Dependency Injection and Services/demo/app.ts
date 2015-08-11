/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

class BarService {
  constructor() {
    console.log("constructed!");
    this.person = {
      name: 'Jake Hsu',
      age: 25,
      politicalBelief: 'vegan'
    };
  },
  getPersonData() {
    return this.person;
  }
}

@Component({
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
  constructor(barService: BarService) {
    this.dude = barService.getPersonData();
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
      <h1>Top-level component</h1>
      <foo></foo>
      <foo></foo>
    </div>
  `
})
// Component controller
class MyAppComponent {}

bootstrap(MyAppComponent, [BarService]);

