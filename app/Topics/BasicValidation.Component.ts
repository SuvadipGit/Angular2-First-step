import {Component} from '@angular/core'

@Component({
	selector: 'basicvalidation',
	template:`<hero-form-template1></hero-form-template1>
             <hr>
             <hero-form-template2></hero-form-template2>
             <hr>
             <hero-form-reactive3></hero-form-reactive3>`,
    styles:[`.ng-valid[required], .ng-valid.required  {
			  border-left: 5px solid #42A948; /* green */
			}

			.ng-invalid:not(form)  {
			  border-left: 5px solid #a94442; /* red */
			}`]

})
export class BasicValidationComponent
{	
	name:string;
	email:string;
	 frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];
    
    onSubscribe(form){
        console.log(form.value);
    }
}