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
    var BasicValidationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BasicValidationComponent = (function () {
                function BasicValidationComponent() {
                    this.frequencies = [
                        { id: 1, label: 'Daily' },
                        { id: 2, label: 'Weekly' },
                        { id: 3, label: 'Monthly' }
                    ];
                }
                BasicValidationComponent.prototype.onSubscribe = function (form) {
                    console.log(form.value);
                };
                BasicValidationComponent = __decorate([
                    core_1.Component({
                        selector: 'basicvalidation',
                        template: "<hero-form-template1></hero-form-template1>\n             <hr>\n             <hero-form-template2></hero-form-template2>\n             <hr>\n             <hero-form-reactive3></hero-form-reactive3>",
                        styles: [".ng-valid[required], .ng-valid.required  {\n\t\t\t  border-left: 5px solid #42A948; /* green */\n\t\t\t}\n\n\t\t\t.ng-invalid:not(form)  {\n\t\t\t  border-left: 5px solid #a94442; /* red */\n\t\t\t}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BasicValidationComponent);
                return BasicValidationComponent;
            }());
            exports_1("BasicValidationComponent", BasicValidationComponent);
        }
    }
});
//# sourceMappingURL=BasicValidation.Component.js.map