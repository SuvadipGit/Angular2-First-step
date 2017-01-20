System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DataDisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataDisplayComponent = (function () {
                function DataDisplayComponent() {
                    this.sampleprop = 'sample value';
                    this.sampleImageSrc = 'http://lorempixel.com/400/200';
                    this.isActive = true;
                    this.sampleText = 'sample';
                }
                DataDisplayComponent.prototype.customEvent = function (event) {
                    this.isActive = !this.isActive;
                    console.log(event);
                };
                DataDisplayComponent = __decorate([
                    core_1.Component({
                        selector: 'datadisplay',
                        template: "<h2>Data Display</h2>\t\n\t\t<p>Property Bindings & Interpolation -One way binding</p>\t\n\t\t<p>{{sampleprop}}</p>\t\n\t\t<img src={{sampleImageSrc}} />\t\n\t\t<p>Class Bindings</p>\t\n\t\t<button class =\"btn btn-primary\" \n\t\t [class.active]\t='isActive'\t>class binding</button>\n\t\t<button class =\"btn btn-primary\"\n\t\t [style.backgroundColor]=\"isActive ?'red':'green'\">\n\t\t style binding</button>\n\t\t <p>Event Bindings</p>\t\n\t\t <p>Clcik on the button to toggle the style of above right button</p>\n\t\t <button class =\"btn btn-danger\" (click)='customEvent($event)'>\n\t\t toggle class</button>\n\t\t <p>Two way Bindings</p>\n\t\t <p>Write something in text box to see the label changes simultaneously</p>\n\t\t <input type=\"text\" [(ngModel)]=\"sampleText\" />\t\n\t\t <label>{{sampleText}}</label>\n\t\t\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataDisplayComponent);
                return DataDisplayComponent;
            }());
            exports_1("DataDisplayComponent", DataDisplayComponent);
        }
    }
});
//# sourceMappingURL=DataDisplay.Component.js.map