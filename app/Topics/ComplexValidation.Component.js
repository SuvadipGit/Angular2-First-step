System.register(['@angular/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var ComplexValidationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            ComplexValidationComponent = (function () {
                function ComplexValidationComponent() {
                }
                ComplexValidationComponent = __decorate([
                    core_1.Component({
                        selector: 'complexvalidation',
                        template: "<h2>Complex Form Validation</h2>\n\t<input id=\"search\" type=\"text\" />\n\t\t\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ComplexValidationComponent);
                return ComplexValidationComponent;
            }());
            exports_1("ComplexValidationComponent", ComplexValidationComponent);
        }
    }
});
//# sourceMappingURL=ComplexValidation.Component.js.map