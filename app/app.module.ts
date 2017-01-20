import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }      from './app.component';
import {CoursesComponent} from './Courses.Component';
import {TopicsComponent} from './Topics.Component'
import {PagenotFoundComponent} from './pagenotfound.component'
import {DataDisplayComponent} from './Topics/DataDisplay.Component'
import {ReusableComponent} from './Topics/Reusable.Component'
import {FavoriteComponent} from './Topics/Favorite.Component'
import {HtmlRenderingComponent} from './Topics/HtmlRendering.Component'
import {BasicValidationComponent} from './Topics/BasicValidation.Component'
import {ComplexValidationComponent} from './Topics/ComplexValidation.Component'
import {ConnectServerComponent} from './Topics/ConnectServer.Component'
import { HeroFormTemplateModule } from './template/hero-form-template.module';
import { HeroFormReactiveModule } from './reactive/hero-form-reactive.module';
import { UserFormComponent} from './Reactive/user-form.component';
import {UtilityComponent} from './Topics/utility.component'
import {PreventUnsavedChangesGuard} from  './Shared/prevent-unsaved-changes-guard.service';

import {CustomDirective} from './Custom.Directive'
import {SummaryPipe} from './Pipes/summary.pipe'
import {MyErrorHandler} from "./error.module";
import {MyErrorModule } from "./error.module";

import {routing} from './app.routing'
import {topicsRouting}    from './Topics.routing'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        routing,
        topicsRouting,
        HeroFormTemplateModule,
        HeroFormReactiveModule,
        HttpModule,
        MyErrorModule
    ],
    declarations: [
        AppComponent,
        CoursesComponent,
        CustomDirective,
        TopicsComponent,
        PagenotFoundComponent,
        DataDisplayComponent,
        ReusableComponent,
        FavoriteComponent,
        HtmlRenderingComponent,
        BasicValidationComponent,
        ComplexValidationComponent,
        ConnectServerComponent,
        SummaryPipe ,
        UserFormComponent,
        UtilityComponent
    ],
    providers:[PreventUnsavedChangesGuard,MyErrorHandler],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
}