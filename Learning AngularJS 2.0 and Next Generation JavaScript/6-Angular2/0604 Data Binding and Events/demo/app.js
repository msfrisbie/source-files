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
var Foo = (function () {
    function Foo() {
        this.mydata = "I am a foo component!";
    }
    Foo.prototype.age = function () {
        ++this.dude.age;
    };
    Foo = __decorate([
        angular2_1.Component({
            properties: ["dude"],
            selector: 'foo'
        }),
        angular2_1.View({
            template: "\n    <div>\n      <span>{{ mydata }} - {{ dude.name }} ({{ dude.age }}), {{ dude.politicalBelief }}</span>\n      <button (click)=\"age()\">Gittin' OLDER</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Foo);
    return Foo;
})();
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.person = {
            name: 'Jake Hsu',
            age: 25,
            politicalBelief: 'vegan'
        };
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [Foo],
            template: "\n    <div>\n      <h1>Top-level component {{ person.name }}</h1>\n      <foo [dude]=\"person\"></foo>\n      <foo [dude]=\"person\"></foo>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
