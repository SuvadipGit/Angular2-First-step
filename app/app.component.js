System.register(['@angular/core', './Courses.Component', './Topics.Component', './pagenotfound.component', './Topics/DataDisplay.Component'], function(exports_1, context_1) {
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
    var core_1, Courses_Component_1, Topics_Component_1, pagenotfound_component_1, DataDisplay_Component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            }],
        execute: function() {
            // import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from '@angular/router'
            // @RouteConfig([ 
            // 	{ path:'/', name:'TopicsName', component: TopicsComponent},
            // 	{ path:'/topics', name:'TopicsName', component: TopicsComponent},
            // 	{ path:'/topics/DataDisplay', name:'DataDisplay', component: DataDisplayComponent},
            // 	{ path:'/topics/ReusableComponents', name:'ReusableComponents', component: ReusableComponent},
            // 	{ path:'/topics/HTMLRendering', name:'HTMLRendering', component: HtmlRenderingComponent},
            // 	{ path:'/topics/BasicValidation', name:'BasicValidation', component: BasicValidationComponent},
            // 	{ path:'/topics/ComplexValidation', name:'ComplexValidation', component: ComplexValidationComponent},
            // 	{ path:'/topics/ConnectToServer', name:'ConnectToServer', component: ConnectServerComponent},
            // 	//{ path:'/*other', name:'Other', component: PagenotFoundComponent}
            // 	{ path:'/*other', name:'Other', redirectTo: ['TopicsName']}
            // 	])
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>My First Angular 2 App</h1>\n    \t\t\t<p>Click on the below link to see the router working</p>\n    \t\t\t<!-- <courses><courses> -->\n    \t\t\t<a routerLink = \"/topics\">Go to Topics</a>\n    \t\t\t<router-outlet></router-outlet>\n    \t\t\t",
                        providers: [Courses_Component_1.CoursesComponent, Topics_Component_1.TopicsComponent, pagenotfound_component_1.PagenotFoundComponent, DataDisplay_Component_1.DataDisplayComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map