System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1, core_2;
    var MyErrorHandler, MyErrorModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            MyErrorHandler = (function () {
                function MyErrorHandler() {
                }
                MyErrorHandler.prototype.call = function (error, stackTrace, reason) {
                    if (stackTrace === void 0) { stackTrace = null; }
                    if (reason === void 0) { reason = null; }
                    // do something with the exception
                    console.log("do something with the exception");
                };
                // I handle the given error.
                MyErrorHandler.prototype.handleError = function (error) {
                    console.log(error);
                    console.log("App had handled the given error");
                    alert("Exception Handled : " + error);
                };
                return MyErrorHandler;
            }());
            exports_1("MyErrorHandler", MyErrorHandler);
            MyErrorModule = (function () {
                function MyErrorModule() {
                }
                MyErrorModule = __decorate([
                    core_2.NgModule({
                        providers: [
                            {
                                provide: core_1.ErrorHandler,
                                useClass: MyErrorHandler
                            }
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyErrorModule);
                return MyErrorModule;
            }());
            exports_1("MyErrorModule", MyErrorModule);
        }
    }
});
//# sourceMappingURL=error.module.js.map