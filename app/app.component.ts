import {Component} from '@angular/core';
import {CoursesComponent} from './Courses.Component'
import {TopicsComponent} from './Topics.Component'
import {PagenotFoundComponent} from './pagenotfound.component'
import {DataDisplayComponent} from './Topics/DataDisplay.Component'
import {ReusableComponent} from './Topics/Reusable.Component'
import {HtmlRenderingComponent} from './Topics/HtmlRendering.Component'
import {BasicValidationComponent} from './Topics/BasicValidation.Component'
import {ComplexValidationComponent} from './Topics/ComplexValidation.Component'
import {ConnectServerComponent} from './Topics/ConnectServer.Component'
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

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    			<p>Click on the below link to see the router working</p>
    			<!-- <courses><courses> -->
    			<a routerLink = "/topics">Go to Topics</a>
    			<router-outlet></router-outlet>
    			`,
    providers: [CoursesComponent,TopicsComponent,PagenotFoundComponent,DataDisplayComponent]
})
export class AppComponent { }