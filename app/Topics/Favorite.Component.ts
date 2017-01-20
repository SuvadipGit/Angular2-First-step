import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
	selector: 'favorite',
	templateUrl:'app/Topics/Favorites.html'	,
	styles:	[`
			.glyphicon-star{
				color: blue;
			}
			`],
	styleUrls:['app/Topics/Favorites.css']
				
})
export class FavoriteComponent
{	
	@Input() isFavorite:boolean;
	@Output() change = new EventEmitter();
	constructor(){
		this.isFavorite = false;
	}
	onFavoriteClick(){
		this.isFavorite = !this.isFavorite;
		this.change.emit({emitValue : this.isFavorite});
	}
}