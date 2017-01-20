import {Component,OnInit} from '@angular/core'

import {CallServer} from '../Service/servercommunication.service'
import {PreventUnsavedChangesGuard} from  '../Shared/prevent-unsaved-changes-guard.service';

@Component({
	selector: 'connectserver',
	template:`<h2>Connect to Server</h2>,
	<p>Topic containing vaious calls to the server api,
	here the api used is sample api, no real time operation.</p>
	<p>see the use of loading icon</p>
	<p>Also clicking on Error handling button will show centralized custom error handling process</p>
	<div *ngIf="isLoading" style="position:absolute; z-index= 1000; top:40%; left:50%">
		<i class="fa fa-spinner fa-spin fa-5x"></i>
	</div>
	<label>Name</label><input type="text" [(ngModel)]="userName" />	
	<button class="btn btn-primary" (click)="addUser()">Add user</button>
	<button class="btn btn-primary" (click)="customError()">Error Handling</button>
		<table class="table table-bordered">
	<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>
	</thead>
	<tbody>
		<tr *ngFor="let user of users">
			<td>{{ user.name }}</td>
			<td>{{ user.email }}</td>
			<td>
                <a [routerLink]="['/topics/connectToServer/users', user.id]">
                    <i class="glyphicon glyphicon-edit"></i>
                </a>
			</td>
			<td>
                <i (click)="deleteUser(user)" class="glyphicon glyphicon-remove clickable"></i>
            </td>
		</tr>
	</tbody>
</table>
		`,
	providers :[CallServer,PreventUnsavedChangesGuard]				
				
})
export class ConnectServerComponent
{
	users: any[];
	user:any;
	userName:string;
	isLoading : boolean;
	constructor(private _callServer:CallServer){
		this.userName ='sample';
	}
	ngOnInit(){
		this.isLoading = true;
		this._callServer.getUsers()
		.subscribe(users => {
			this.users = users;
			this.isLoading = false;
		});
	}
	 deleteUser(user){
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);
            this.isLoading = true;
			this._callServer.deleteUser(user.id)
				.subscribe(x=>{this.isLoading = false;}, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
		}
	}
	addUser(){
		this.isLoading = true;
				this.user ={
		    "id": 1,
		    "name": this.userName,
		    "username": "Bret",
		    "email": "Sincere@april.biz",
		    "address": {
		      "street": "Kulas Light",
		      "suite": "Apt. 556",
		      "city": "Gwenborough",
		      "zipcode": "92998-3874",
		      "geo": {
		        "lat": "-37.3159",
		        "lng": "81.1496"
		      }
		    },
		    "phone": "1-770-736-8031 x56442",
		    "website": "hildegard.org",
		    "company": {
		      "name": "Romaguera-Crona",
		      "catchPhrase": "Multi-layered client-server neural-net",
		      "bs": "harness real-time e-markets"
		    }
		  }
		  this._callServer.addUser(this.user)
		  .subscribe(users => {
		  	this.isLoading = false;
		  	alert(users.id +'th user added')
		  });
	}
	customError(){
		this._callServer.throwCustomError()
		.subscribe(response => {			
		});
	}
}