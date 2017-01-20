import {Component} from '@angular/core'
import {SummaryPipe} from '../Pipes/summary.pipe'

@Component({
	selector: 'htmlrendering',
	templateUrl:'app/Topics/HtmlRender.html'
	
})
export class HtmlRenderingComponent
{	
	courses:string[];
	topics:string[];
	viewMode:string;
	pipetest: any;
	customPipeText : string;
	constructor(){
		this.courses =[];
		this.topics =['topic1','topic2','topic3'];
		this.pipetest= {
			title:'pipe title',
			number: 1234567,
			currency: 1234567,
			decimal:1234567,
			dateval: new Date
		};
		this.customPipeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac augue est. In ut finibus odio. Vestibulum ut mauris at augue lacinia tempus. Quisque cursus sed quam molestie hendrerit. Curabitur eu arcu vestibulum, vulputate odio sed, auctor diam. Mauris hendrerit urna massa, vel porta mauris pellentesque vitae.';
	}
}