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
    var HtmlRenderingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HtmlRenderingComponent = (function () {
                function HtmlRenderingComponent() {
                    this.courses = [];
                    this.topics = ['topic1', 'topic2', 'topic3'];
                    this.pipetest = {
                        title: 'pipe title',
                        number: 1234567,
                        currency: 1234567,
                        decimal: 1234567,
                        dateval: new Date
                    };
                    this.customPipeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac augue est. In ut finibus odio. Vestibulum ut mauris at augue lacinia tempus. Quisque cursus sed quam molestie hendrerit. Curabitur eu arcu vestibulum, vulputate odio sed, auctor diam. Mauris hendrerit urna massa, vel porta mauris pellentesque vitae.';
                }
                HtmlRenderingComponent = __decorate([
                    core_1.Component({
                        selector: 'htmlrendering',
                        templateUrl: 'app/Topics/HtmlRender.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HtmlRenderingComponent);
                return HtmlRenderingComponent;
            }());
            exports_1("HtmlRenderingComponent", HtmlRenderingComponent);
        }
    }
});
//# sourceMappingURL=HtmlRendering.Component.js.map