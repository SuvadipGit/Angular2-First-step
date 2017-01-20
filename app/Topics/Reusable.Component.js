System.register(['@angular/core', './Favorite.Component'], function(exports_1, context_1) {
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
    var core_1, Favorite_Component_1;
    var ReusableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Favorite_Component_1_1) {
                Favorite_Component_1 = Favorite_Component_1_1;
            }],
        execute: function() {
            ReusableComponent = (function () {
                function ReusableComponent() {
                    this.inputData = {
                        title: 'sample',
                        isFavorite: true
                    };
                }
                ReusableComponent.prototype.customChangeEvent = function (event) {
                    alert(event.emitValue);
                };
                ReusableComponent = __decorate([
                    core_1.Component({
                        selector: 'reusable',
                        template: "<h2>Reusable</h2>\t\n\t<p>Example of @input and @output, inut is setting initial value, click on\n\tthe favorite icon to see the data emitted by favorite component.\n\tTake a close look at the code</p>\n\t\t<favorite [isFavorite]=\"inputData.isFavorite\" \n\t\t(change)=\"customChangeEvent($event)\"> </favorite>\n\t\t\t\t",
                        providers: [Favorite_Component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReusableComponent);
                return ReusableComponent;
            }());
            exports_1("ReusableComponent", ReusableComponent);
        }
    }
});
//# sourceMappingURL=Reusable.Component.js.map