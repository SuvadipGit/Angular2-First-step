import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { BasicValidators }                       from '../Shared/basicValidator';
import { CallServer }                           from '../Service/servercommunication.service';
import { User }                                  from '../Shared/user';
import {PreventUnsavedChangesGuard} from  '../Shared/prevent-unsaved-changes-guard.service';

@Component({
    templateUrl: 'app/Reactive/user-form.component.html',
    providers: [CallServer,PreventUnsavedChangesGuard]
})
export class UserFormComponent implements OnInit {
	form: FormGroup;
    title: string;
    user = new User();

	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _userService: CallServer
    ) {
		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', BasicValidators.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
	}
    
    ngOnInit(){
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];

              this.title = id ? "Edit User" : "New User";
        
        if (!id)
			return;
            
        this._userService.getUser(id)
			.subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
        });
    }
    
    save(){
        var result;
        
        if (this.user.id) 
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.addUser(this.user)
            
		result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['topics/connectToServer']);
        });
	}
}