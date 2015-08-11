/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router, routerInjectables} from 'angular2/router';


@Component({})
@View({
  template: 'This is the foo route!'
})
class Foo {}

@Component({})
@View({
  template: 'This is the bar route!'
})
class Bar {}

@RouteConfig([
  {
    path: '/',
    as: 'foo',
    component: Foo
  },
  {
    path: '/bar',
    as: 'bar',
    component: Bar
  }
])
@Component({
  appInjector: [routerInjectables],
  selector: 'my-app'
})
@View({
  directives: [RouterOutlet, RouterLink],
  template:`
    <div>
      <a router-link="foo">This goes to foo!</a>
      <a router-link="bar">This goes to bar!</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
class MyAppComponent {}

bootstrap(MyAppComponent);

