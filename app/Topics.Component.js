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
    var TopicsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TopicsComponent = (function () {
                function TopicsComponent() {
                }
                TopicsComponent = __decorate([
                    core_1.Component({
                        selector: 'topics',
                        template: "<h2>Topics</h2>\n\t\t<p>Click the links to see various angular2 parts working</p>\t\n\t\t\n\t\t\t\t<a routerLink = \"datadisplay\" class=\"btn btn-block btn-info\">\n\t\t\t\t<span class=\"glyphicon glyphicon-book\"></span>\n\t\t\t\tData Display and binding events</a>\t\n\t\t\t\t<br/>\t\t\n\t\t\t\t<a routerLink = \"reusableComponents\" class=\"btn btn-block btn-info\">\n\t\t\t\t<span class=\"glyphicon glyphicon-book\"></span>\n\t\t\t\tReusableComponents</a>\t\n\t\t\t\t<br/>\n\t\t\t\t<a routerLink = \"htmlRendering\" class=\"btn btn-block btn-info\">\n\t\t\t\t<span class=\"glyphicon glyphicon-book\"></span>\n\t\t\t\tHTMLRendering</a>\t\n\t\t\t\t<br/>\n\t\t\t\t<a routerLink = \"basicvalidation\" class=\"btn btn-block btn-info\" >\n\t\t\t\t<span class=\"glyphicon glyphicon-book\"></span>\n\t\t\t\tBasicValidation</a>\t\t\t\t\t\n\t\t\t\t<br/>\n\t\t\t\t<a routerLink = \"connectToServer\"class=\"btn btn-block btn-info\">\n\t\t\t\t<span class=\"glyphicon glyphicon-book\"></span>\n\t\t\t\tConnectToServer</a>\t\n\t\t\t\t<br/>\n\t\t\t\t<a routerLink = \"utility\" class=\"btn btn-block btn-info\">\n\t\t\t\t<span class=\"glyphicon glyphicon-book\"></span>\n\t\t\t\tUtilities</a>\n\t\t\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopicsComponent);
                return TopicsComponent;
            }());
            exports_1("TopicsComponent", TopicsComponent);
        }
    }
});
//# sourceMappingURL=Topics.Component.js.map