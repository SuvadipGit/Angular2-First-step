System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/common', '@angular/http', './app.component', './Courses.Component', './Topics.Component', './pagenotfound.component', './Topics/DataDisplay.Component', './Topics/Reusable.Component', './Topics/Favorite.Component', './Topics/HtmlRendering.Component', './Topics/BasicValidation.Component', './Topics/ComplexValidation.Component', './Topics/ConnectServer.Component', './template/hero-form-template.module', './reactive/hero-form-reactive.module', './Reactive/user-form.component', './Topics/utility.component', './Shared/prevent-unsaved-changes-guard.service', './Custom.Directive', './Pipes/summary.pipe', "./error.module", './app.routing', './Topics.routing'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, common_1, http_1, forms_2, app_component_1, Courses_Component_1, Topics_Component_1, pagenotfound_component_1, DataDisplay_Component_1, Reusable_Component_1, Favorite_Component_1, HtmlRendering_Component_1, BasicValidation_Component_1, ComplexValidation_Component_1, ConnectServer_Component_1, hero_form_template_module_1, hero_form_reactive_module_1, user_form_component_1, utility_component_1, prevent_unsaved_changes_guard_service_1, Custom_Directive_1, summary_pipe_1, error_module_1, error_module_2, app_routing_1, Topics_routing_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
                forms_2 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (Courses_Component_1_1) {
                Courses_Component_1 = Courses_Component_1_1;
            },
            function (Topics_Component_1_1) {
                Topics_Component_1 = Topics_Component_1_1;
            },
            function (pagenotfound_component_1_1) {
                pagenotfound_component_1 = pagenotfound_component_1_1;
            },
            function (DataDisplay_Component_1_1) {
                DataDisplay_Component_1 = DataDisplay_Component_1_1;
            },
            function (Reusable_Component_1_1) {
                Reusable_Component_1 = Reusable_Component_1_1;
            },
            function (Favorite_Component_1_1) {
                Favorite_Component_1 = Favorite_Component_1_1;
            },
            function (HtmlRendering_Component_1_1) {
                HtmlRendering_Component_1 = HtmlRendering_Component_1_1;
            },
            function (BasicValidation_Component_1_1) {
                BasicValidation_Component_1 = BasicValidation_Component_1_1;
            },
            function (ComplexValidation_Component_1_1) {
                ComplexValidation_Component_1 = ComplexValidation_Component_1_1;
            },
            function (ConnectServer_Component_1_1) {
                ConnectServer_Component_1 = ConnectServer_Component_1_1;
            },
            function (hero_form_template_module_1_1) {
                hero_form_template_module_1 = hero_form_template_module_1_1;
            },
            function (hero_form_reactive_module_1_1) {
                hero_form_reactive_module_1 = hero_form_reactive_module_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (utility_component_1_1) {
                utility_component_1 = utility_component_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            },
            function (Custom_Directive_1_1) {
                Custom_Directive_1 = Custom_Directive_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (error_module_1_1) {
                error_module_1 = error_module_1_1;
                error_module_2 = error_module_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (Topics_routing_1_1) {
                Topics_routing_1 = Topics_routing_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            common_1.CommonModule,
                            forms_2.ReactiveFormsModule,
                            app_routing_1.routing,
                            Topics_routing_1.topicsRouting,
                            hero_form_template_module_1.HeroFormTemplateModule,
                            hero_form_reactive_module_1.HeroFormReactiveModule,
                            http_1.HttpModule,
                            error_module_2.MyErrorModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            Courses_Component_1.CoursesComponent,
                            Custom_Directive_1.CustomDirective,
                            Topics_Component_1.TopicsComponent,
                            pagenotfound_component_1.PagenotFoundComponent,
                            DataDisplay_Component_1.DataDisplayComponent,
                            Reusable_Component_1.ReusableComponent,
                            Favorite_Component_1.FavoriteComponent,
                            HtmlRendering_Component_1.HtmlRenderingComponent,
                            BasicValidation_Component_1.BasicValidationComponent,
                            ComplexValidation_Component_1.ComplexValidationComponent,
                            ConnectServer_Component_1.ConnectServerComponent,
                            summary_pipe_1.SummaryPipe,
                            user_form_component_1.UserFormComponent,
                            utility_component_1.UtilityComponent
                        ],
                        providers: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard, error_module_1.MyErrorHandler],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map