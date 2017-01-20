System.register(['@angular/core', '@angular/forms', '../shared/shared.module', './hero-form-template1.component', './hero-form-template2.component'], function(exports_1, context_1) {
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
    var core_1, forms_1, shared_module_1, hero_form_template1_component_1, hero_form_template2_component_1;
    var HeroFormTemplateModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (hero_form_template1_component_1_1) {
                hero_form_template1_component_1 = hero_form_template1_component_1_1;
            },
            function (hero_form_template2_component_1_1) {
                hero_form_template2_component_1 = hero_form_template2_component_1_1;
            }],
        execute: function() {
            HeroFormTemplateModule = (function () {
                function HeroFormTemplateModule() {
                }
                HeroFormTemplateModule = __decorate([
                    core_1.NgModule({
                        imports: [shared_module_1.SharedModule, forms_1.FormsModule],
                        declarations: [hero_form_template1_component_1.HeroFormTemplate1Component, hero_form_template2_component_1.HeroFormTemplate2Component],
                        exports: [hero_form_template1_component_1.HeroFormTemplate1Component, hero_form_template2_component_1.HeroFormTemplate2Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroFormTemplateModule);
                return HeroFormTemplateModule;
            }());
            exports_1("HeroFormTemplateModule", HeroFormTemplateModule);
        }
    }
});
//# sourceMappingURL=hero-form-template.module.js.map