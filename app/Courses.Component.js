System.register(['@angular/core', './Courses.Service'], function(exports_1, context_1) {
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
    var core_1, Courses_Service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Courses_Service_1_1) {
                Courses_Service_1 = Courses_Service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.courseService = courseService;
                    this.title = 'our course title - angular2';
                    this.courses = this.courseService.fetchCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "<h2>Courses</h2>\n\t\t\t\t<p>Below are the exaples of interpolation along with ngfor</p>\n\t\t\t\t{{title}}\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor='let course of courses'>{{course}}</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>Focus into below text box and focus out to see custom directive\n\t\t\t\tworking</p>\n\t\t\t\t<input type='text' customdirective/>\t\n\t\t\t\t\n\t\t\t\t",
                        providers: [Courses_Service_1.CourseService]
                    }), 
                    __metadata('design:paramtypes', [Courses_Service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=Courses.Component.js.map