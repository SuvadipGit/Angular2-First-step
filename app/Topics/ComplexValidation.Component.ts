import {Component} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

declare var jQuery:any;
@Component({
	selector: 'complexvalidation',
	template:`<h2>Complex Form Validation</h2>
	<input id="search" type="text" />
				`
})

export class ComplexValidationComponent
{	

	constructor(){
		
	}
}