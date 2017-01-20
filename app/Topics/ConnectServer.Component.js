System.register(['@angular/core', '../Service/servercommunication.service', '../Shared/prevent-unsaved-changes-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, servercommunication_service_1, prevent_unsaved_changes_guard_service_1;
    var ConnectServerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (servercommunication_service_1_1) {
                servercommunication_service_1 = servercommunication_service_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            }],
        execute: function() {
            ConnectServerComponent = (function () {
                function ConnectServerComponent(_callServer) {
                    this._callServer = _callServer;
                    this.userName = 'sample';
                }
                ConnectServerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this._callServer.getUsers()
                        .subscribe(function (users) {
                        _this.users = users;
                        _this.isLoading = false;
                    });
                };
                ConnectServerComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + user.name + "?")) {
                        var index = this.users.indexOf(user);
                        // Here, with the splice method, we remove 1 object
                        // at the given index.
                        this.users.splice(index, 1);
                        this.isLoading = true;
                        this._callServer.deleteUser(user.id)
                            .subscribe(function (x) { _this.isLoading = false; }, function (err) {
                            alert("Could not delete the user.");
                            // Revert the view back to its original state
                            // by putting the user object at the index
                            // it used to be.
                            _this.users.splice(index, 0, user);
                        });
                    }
                };
                ConnectServerComponent.prototype.addUser = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.user = {
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
                    };
                    this._callServer.addUser(this.user)
                        .subscribe(function (users) {
                        _this.isLoading = false;
                        alert(users.id + 'th user added');
                    });
                };
                ConnectServerComponent.prototype.customError = function () {
                    this._callServer.throwCustomError()
                        .subscribe(function (response) {
                    });
                };
                ConnectServerComponent = __decorate([
                    core_1.Component({
                        selector: 'connectserver',
                        template: "<h2>Connect to Server</h2>,\n\t<p>Topic containing vaious calls to the server api,\n\there the api used is sample api, no real time operation.</p>\n\t<p>see the use of loading icon</p>\n\t<p>Also clicking on Error handling button will show centralized custom error handling process</p>\n\t<div *ngIf=\"isLoading\" style=\"position:absolute; z-index= 1000; top:40%; left:50%\">\n\t\t<i class=\"fa fa-spinner fa-spin fa-5x\"></i>\n\t</div>\n\t<label>Name</label><input type=\"text\" [(ngModel)]=\"userName\" />\t\n\t<button class=\"btn btn-primary\" (click)=\"addUser()\">Add user</button>\n\t<button class=\"btn btn-primary\" (click)=\"customError()\">Error Handling</button>\n\t\t<table class=\"table table-bordered\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Name</th>\n\t\t\t<th>Email</th>\n\t\t\t<th>Edit</th>\n\t\t\t<th>Delete</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let user of users\">\n\t\t\t<td>{{ user.name }}</td>\n\t\t\t<td>{{ user.email }}</td>\n\t\t\t<td>\n                <a [routerLink]=\"['/topics/connectToServer/users', user.id]\">\n                    <i class=\"glyphicon glyphicon-edit\"></i>\n                </a>\n\t\t\t</td>\n\t\t\t<td>\n                <i (click)=\"deleteUser(user)\" class=\"glyphicon glyphicon-remove clickable\"></i>\n            </td>\n\t\t</tr>\n\t</tbody>\n</table>\n\t\t",
                        providers: [servercommunication_service_1.CallServer, prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                    }), 
                    __metadata('design:paramtypes', [servercommunication_service_1.CallServer])
                ], ConnectServerComponent);
                return ConnectServerComponent;
            }());
            exports_1("ConnectServerComponent", ConnectServerComponent);
        }
    }
});
//# sourceMappingURL=ConnectServer.Component.js.map