import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'

@Component({
	selector: 'topics',
	template:`<h2>Topics</h2>
		<p>Click the links to see various angular2 parts working</p>	
		
				<a routerLink = "datadisplay" class="btn btn-block btn-info">
				<span class="glyphicon glyphicon-book"></span>
				Data Display and binding events</a>	
				<br/>		
				<a routerLink = "reusableComponents" class="btn btn-block btn-info">
				<span class="glyphicon glyphicon-book"></span>
				ReusableComponents</a>	
				<br/>
				<a routerLink = "htmlRendering" class="btn btn-block btn-info">
				<span class="glyphicon glyphicon-book"></span>
				HTMLRendering</a>	
				<br/>
				<a routerLink = "basicvalidation" class="btn btn-block btn-info" >
				<span class="glyphicon glyphicon-book"></span>
				BasicValidation</a>					
				<br/>
				<a routerLink = "connectToServer"class="btn btn-block btn-info">
				<span class="glyphicon glyphicon-book"></span>
				ConnectToServer</a>	
				<br/>
				<a routerLink = "utility" class="btn btn-block btn-info">
				<span class="glyphicon glyphicon-book"></span>
				Utilities</a>
				`
})
export class TopicsComponent
{	
	constructor(){
		
	}
}@