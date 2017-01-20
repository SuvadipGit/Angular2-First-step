System.register(['@angular/router', './Topics.Component', './pagenotfound.component', './Courses.Component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, Topics_Component_1, pagenotfound_component_1, Courses_Component_1;
    var routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Topics_Component_1_1) {
                Topics_Component_1 = Topics_Component_1_1;
            },
            function (pagenotfound_component_1_1) {
                pagenotfound_component_1 = pagenotfound_component_1_1;
            },
            function (Courses_Component_1_1) {
                Courses_Component_1 = Courses_Component_1_1;
            }],
        execute: function() {
            exports_1("routing", routing = router_1.RouterModule.forRoot([
                { path: '', component: Courses_Component_1.CoursesComponent },
                { path: 'topics', component: Topics_Component_1.TopicsComponent },
                { path: 'not-found', component: pagenotfound_component_1.PagenotFoundComponent } //,
            ]));
        }
    }
});
//# sourceMappingURL=app.routing.js.map