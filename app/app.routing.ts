
import { RouterModule  }     from '@angular/router';

import {TopicsComponent} from './Topics.Component'
import {PagenotFoundComponent} from './pagenotfound.component'
import {CoursesComponent} from './Courses.Component'

export const routing = RouterModule.forRoot([
	{ path: '', component: CoursesComponent },
	{ path: 'topics', component: TopicsComponent },
    { path: 'not-found', component: PagenotFoundComponent }//,
	//{ path: '**', redirectTo: 'not-found' }
]);