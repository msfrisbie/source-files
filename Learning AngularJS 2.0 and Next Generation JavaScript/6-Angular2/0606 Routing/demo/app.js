/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var Foo = (function () {
    function Foo() {
    }
    Foo = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            template: 'This is the foo route!'
        }), 
        __metadata('design:paramtypes', [])
    ], Foo);
    return Foo;
})();
var Bar = (function () {
    function Bar() {
    }
    Bar = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            template: 'This is the bar route!'
        }), 
        __metadata('design:paramtypes', [])
    ], Bar);
    return Bar;
})();
var MyAppComponent = (function () {
    function MyAppComponent() {
    }
    MyAppComponent = __decorate([
        router_1.RouteConfig([
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
        ]),
        angular2_1.Component({
            appInjector: [router_1.routerInjectables],
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            template: "\n    <div>\n      <a router-link=\"foo\">This goes to foo!</a>\n      <a router-link=\"bar\">This goes to bar!</a>\n    </div>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
