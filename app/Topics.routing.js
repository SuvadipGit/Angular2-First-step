System.register(['@angular/router', './pagenotfound.component', './Topics/DataDisplay.Component', './Topics/Reusable.Component', './Topics/HtmlRendering.Component', './Topics/BasicValidation.Component', './Topics/ConnectServer.Component', './Reactive/user-form.component', './Topics/utility.component', './Shared/prevent-unsaved-changes-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, pagenotfound_component_1, DataDisplay_Component_1, Reusable_Component_1, HtmlRendering_Component_1, BasicValidation_Component_1, ConnectServer_Component_1, user_form_component_1, utility_component_1, prevent_unsaved_changes_guard_service_1;
    var topicsRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (HtmlRendering_Component_1_1) {
                HtmlRendering_Component_1 = HtmlRendering_Component_1_1;
            },
            function (BasicValidation_Component_1_1) {
                BasicValidation_Component_1 = BasicValidation_Component_1_1;
            },
            function (ConnectServer_Component_1_1) {
                ConnectServer_Component_1 = ConnectServer_Component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (utility_component_1_1) {
                utility_component_1 = utility_component_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            }],
        execute: function() {
            exports_1("topicsRouting", topicsRouting = router_1.RouterModule.forChild([
                { path: 'topics/datadisplay', component: DataDisplay_Component_1.DataDisplayComponent },
                { path: 'topics/reusableComponents', component: Reusable_Component_1.ReusableComponent },
                { path: 'topics/htmlRendering', component: HtmlRendering_Component_1.HtmlRenderingComponent },
                { path: 'topics/basicvalidation', component: BasicValidation_Component_1.BasicValidationComponent },
                { path: 'topics/utility', component: utility_component_1.UtilityComponent },
                { path: 'topics/connectToServer', component: ConnectServer_Component_1.ConnectServerComponent },
                { path: 'topics/connectToServer/users/:id', component: user_form_component_1.UserFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },
                { path: 'topics/connectToServer/users/new', component: user_form_component_1.UserFormComponent, canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard] },
                { path: 'not-found', component: pagenotfound_component_1.PagenotFoundComponent },
                { path: '**', redirectTo: 'not-found' }
            ]));
        }
    }
});
//# sourceMappingURL=Topics.routing.js.map