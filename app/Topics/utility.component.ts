import { Component, ComponentRef, ViewContainerRef, ComponentFactoryResolver,
        ViewChild, OnInit, OnDestroy} from '@angular/core';
import { SpeechRecognitionService } from './speech-recognition.service';
import { CoursesComponent } from '../Courses.Component';

@Component({
    selector: 'utility',
    templateUrl: './App/Topics/utility.component.html',
    providers: [SpeechRecognitionService]
})

export class UtilityComponent implements OnInit, OnDestroy {
    showSearchButton: boolean;
    speechData: string;
    @ViewChild('dynamicTarget', { read: ViewContainerRef })
    private dynamicTarget: any;
    dynamicContainer: any;

    constructor(private speechRecognitionService: SpeechRecognitionService, 
        private resolver: ComponentFactoryResolver) {
        this.showSearchButton = true;
        this.speechData = "";        
    }

    ngOnInit() {
        console.log("hello")
    }

    ngOnDestroy() {
        this.speechRecognitionService.DestroySpeechObject();
    }

    activateSpeechSearchMovie(): void {
        this.showSearchButton = false;

        this.speechRecognitionService.record()
            .subscribe(
            //listener
            (value) => {
                this.speechData = value;
                console.log(value);
                this.showSearchButton = true;
                this.speechRecognitionService.DestroySpeechObject();
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                    console.log("--restatring service--");
                    //this.activateSpeechSearchMovie();
                    this.showSearchButton = true;
                    this.speechRecognitionService.DestroySpeechObject();
                    //alert("waiting to hear from you");
                    //this.activateSpeechSearchMovie();
                    
                }
            },
            //completion
            () => {
                this.showSearchButton = true;
                console.log("--complete--");                
                this.speechRecognitionService.DestroySpeechObject();
                //this.activateSpeechSearchMovie();
            });
    }

    createsamecomponent(){
        let componentFactory = this.resolver.resolveComponentFactory(UtilityComponent);
        this.dynamicContainer = this.dynamicTarget.createComponent(componentFactory);
    }
    destroysamecomponent(){
        if(this.dynamicContainer){
            this.dynamicContainer.destroy();
        }
    }
    createcoursecomponent(){
        let componentFactory = this.resolver.resolveComponentFactory(CoursesComponent);
        this.dynamicContainer = this.dynamicTarget.createComponent(componentFactory);
    }
    destroycoursecomponent(){
        if(this.dynamicContainer){
            this.dynamicContainer.destroy();
        }
    }
}