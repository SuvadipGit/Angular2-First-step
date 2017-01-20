import {Component} from '@angular/core'

@Component({
	selector: 'datadisplay',
	template:`<h2>Data Display</h2>	
		<p>Property Bindings & Interpolation -One way binding</p>	
		<p>{{sampleprop}}</p>	
		<img src={{sampleImageSrc}} />	
		<p>Class Bindings</p>	
		<button class ="btn btn-primary" 
		 [class.active]	='isActive'	>class binding</button>
		<button class ="btn btn-primary"
		 [style.backgroundColor]="isActive ?'red':'green'">
		 style binding</button>
		 <p>Event Bindings</p>	
		 <p>Clcik on the button to toggle the style of above right button</p>
		 <button class ="btn btn-danger" (click)='customEvent($event)'>
		 toggle class</button>
		 <p>Two way Bindings</p>
		 <p>Write something in text box to see the label changes simultaneously</p>
		 <input type="text" [(ngModel)]="sampleText" />	
		 <label>{{sampleText}}</label>
				`
})
export class DataDisplayComponent
{	
	sampleprop:string ;
	sampleImageSrc:string;
	isActive:boolean;
	sampleText: string;
	constructor(){
		this.sampleprop = 'sample value';
		this.sampleImageSrc = 'http://lorempixel.com/400/200';
		this.isActive = true;
		this.sampleText = 'sample';
	}
	customEvent(event){
		this.isActive = !this.isActive;
		console.log(event);
	}	
}