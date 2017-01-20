System.register(['@angular/core', './speech-recognition.service', '../Courses.Component'], function(exports_1, context_1) {
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
    var core_1, speech_recognition_service_1, Courses_Component_1;
    var UtilityComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (speech_recognition_service_1_1) {
                speech_recognition_service_1 = speech_recognition_service_1_1;
            },
            function (Courses_Component_1_1) {
                Courses_Component_1 = Courses_Component_1_1;
            }],
        execute: function() {
            UtilityComponent = (function () {
                function UtilityComponent(speechRecognitionService, resolver) {
                    this.speechRecognitionService = speechRecognitionService;
                    this.resolver = resolver;
                    this.showSearchButton = true;
                    this.speechData = "";
                }
                UtilityComponent.prototype.ngOnInit = function () {
                    console.log("hello");
                };
                UtilityComponent.prototype.ngOnDestroy = function () {
                    this.speechRecognitionService.DestroySpeechObject();
                };
                UtilityComponent.prototype.activateSpeechSearchMovie = function () {
                    var _this = this;
                    this.showSearchButton = false;
                    this.speechRecognitionService.record()
                        .subscribe(
                    //listener
                    function (value) {
                        _this.speechData = value;
                        console.log(value);
                        _this.showSearchButton = true;
                        _this.speechRecognitionService.DestroySpeechObject();
                    }, 
                    //errror
                    function (err) {
                        console.log(err);
                        if (err.error == "no-speech") {
                            console.log("--restatring service--");
                            //this.activateSpeechSearchMovie();
                            _this.showSearchButton = true;
                            _this.speechRecognitionService.DestroySpeechObject();
                        }
                    }, 
                    //completion
                    function () {
                        _this.showSearchButton = true;
                        console.log("--complete--");
                        _this.speechRecognitionService.DestroySpeechObject();
                        //this.activateSpeechSearchMovie();
                    });
                };
                UtilityComponent.prototype.createsamecomponent = function () {
                    var componentFactory = this.resolver.resolveComponentFactory(UtilityComponent);
                    this.dynamicContainer = this.dynamicTarget.createComponent(componentFactory);
                };
                UtilityComponent.prototype.destroysamecomponent = function () {
                    if (this.dynamicContainer) {
                        this.dynamicContainer.destroy();
                    }
                };
                UtilityComponent.prototype.createcoursecomponent = function () {
                    var componentFactory = this.resolver.resolveComponentFactory(Courses_Component_1.CoursesComponent);
                    this.dynamicContainer = this.dynamicTarget.createComponent(componentFactory);
                };
                UtilityComponent.prototype.destroycoursecomponent = function () {
                    if (this.dynamicContainer) {
                        this.dynamicContainer.destroy();
                    }
                };
                __decorate([
                    core_1.ViewChild('dynamicTarget', { read: core_1.ViewContainerRef }), 
                    __metadata('design:type', Object)
                ], UtilityComponent.prototype, "dynamicTarget", void 0);
                UtilityComponent = __decorate([
                    core_1.Component({
                        selector: 'utility',
                        templateUrl: './App/Topics/utility.component.html',
                        providers: [speech_recognition_service_1.SpeechRecognitionService]
                    }), 
                    __metadata('design:paramtypes', [speech_recognition_service_1.SpeechRecognitionService, core_1.ComponentFactoryResolver])
                ], UtilityComponent);
                return UtilityComponent;
            }());
            exports_1("UtilityComponent", UtilityComponent);
        }
    }
});
//# sourceMappingURL=utility.component.js.map