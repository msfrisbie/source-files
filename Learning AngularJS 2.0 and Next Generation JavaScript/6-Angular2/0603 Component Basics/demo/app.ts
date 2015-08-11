/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'foo'
})
@View({
  template: `
    <div>{{ mydata }}</div>
  `
})
class Foo {
  constructor() {
    this.mydata = "I am a foo component!";
  },
  mydata: string
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

bootstrap(MyAppComponent);

