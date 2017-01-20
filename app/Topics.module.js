System.register(['@angular/core', '@angular/router', '@angular/forms', './Topics/DataDisplay.Component', './Topics.Component', './pagenotfound.component', './Reactive/user-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, forms_1, DataDisplay_Component_1, Topics_Component_1, pagenotfound_component_1, user_form_component_1;
    var TopicsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (DataDisplay_Component_1_1) {
                DataDisplay_Component_1 = DataDisplay_Component_1_1;
            },
            function (Topics_Component_1_1) {
                Topics_Component_1 = Topics_Component_1_1;
            },
            function (pagenotfound_component_1_1) {
                pagenotfound_component_1 = pagenotfound_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            }],
        execute: function() {
            TopicsModule = (function () {
                function TopicsModule() {
                }
                TopicsModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule, forms_1.ReactiveFormsModule
                        ],
                        declarations: [
                            Topics_Component_1.TopicsComponent,
                            DataDisplay_Component_1.DataDisplayComponent,
                            pagenotfound_component_1.PagenotFoundComponent,
                            user_form_component_1.UserFormComponent
                        ],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopicsModule);
                return TopicsModule;
            }());
            exports_1("TopicsModule", TopicsModule);
        }
    }
});
//# sourceMappingURL=Topics.module.js.map