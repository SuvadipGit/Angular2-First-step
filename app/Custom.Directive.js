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
    var CustomDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomDirective = (function () {
                function CustomDirective(_el, _renderer) {
                    this._el = _el;
                    this._renderer = _renderer;
                }
                CustomDirective.prototype.customFocus = function () {
                    this._renderer.setElementStyle(this._el.nativeElement, 'background-color', 'cyan');
                };
                CustomDirective.prototype.customBlur = function () {
                    this._renderer.setElementStyle(this._el.nativeElement, 'background-color', 'grey');
                };
                CustomDirective = __decorate([
                    core_1.Directive({
                        selector: '[customdirective]',
                        host: {
                            '(focus)': 'customFocus()',
                            '(blur)': 'customBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], CustomDirective);
                return CustomDirective;
            }());
            exports_1("CustomDirective", CustomDirective);
        }
    }
});
//# sourceMappingURL=Custom.Directive.js.map