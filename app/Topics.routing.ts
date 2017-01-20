
import { RouterModule  }     from '@angular/router';

import {TopicsComponent} from './Topics.Component'
import {PagenotFoundComponent} from './pagenotfound.component'
import {DataDisplayComponent} from './Topics/DataDisplay.Component'
import {ReusableComponent} from './Topics/Reusable.Component'
import {HtmlRenderingComponent} from './Topics/HtmlRendering.Component'
import {BasicValidationComponent} from './Topics/BasicValidation.Component'
import {ComplexValidationComponent} from './Topics/ComplexValidation.Component'
import {ConnectServerComponent} from './Topics/ConnectServer.Component'
import { UserFormComponent } 		  from './Reactive/user-form.component';
import {UtilityComponent} from './Topics/utility.component'
import { PreventUnsavedChangesGuard } from './Shared/prevent-unsaved-changes-guard.service';

export const topicsRouting = RouterModule.forChild([	
	{ path: 'topics/datadisplay', component: DataDisplayComponent },
	{ path: 'topics/reusableComponents', component: ReusableComponent },
	{ path: 'topics/htmlRendering', component: HtmlRenderingComponent },
	{ path: 'topics/basicvalidation', component: BasicValidationComponent },
	{ path: 'topics/utility', component: UtilityComponent },
	{ path: 'topics/connectToServer', component: ConnectServerComponent },
	{ path: 'topics/connectToServer/users/:id', component: UserFormComponent, canDeactivate:[ PreventUnsavedChangesGuard ]   },
	{ path: 'topics/connectToServer/users/new', component: UserFormComponent, canDeactivate:[ PreventUnsavedChangesGuard ]   },
    { path: 'not-found', component: PagenotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
]);