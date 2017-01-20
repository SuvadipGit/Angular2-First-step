import {Component} from '@angular/core'
import {FavoriteComponent} from './Favorite.Component'


@Component({
	selector: 'reusable',
	template:`<h2>Reusable</h2>	
	<p>Example of @input and @output, inut is setting initial value, click on
	the favorite icon to see the data emitted by favorite component.
	Take a close look at the code</p>
		<favorite [isFavorite]="inputData.isFavorite" 
		(change)="customChangeEvent($event)"> </favorite>
				`,
	providers:[FavoriteComponent]
})
export class ReusableComponent
{	
	inputData={
		title:'sample',
		isFavorite:true
	}
	constructor(){
		
	}
	customChangeEvent(event){
		alert(event.emitValue);
	}
}