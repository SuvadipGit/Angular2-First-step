
import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DataDisplayComponent }    from './Topics/DataDisplay.Component';
import { TopicsComponent }    from './Topics.Component';
import {PagenotFoundComponent} from './pagenotfound.component'
import { UserFormComponent} from './Reactive/user-form.component';


@NgModule({
    imports: [        
        RouterModule  ,ReactiveFormsModule      
    ],
    declarations: [
        TopicsComponent, 
        DataDisplayComponent,
        PagenotFoundComponent,
        UserFormComponent
    ],
    exports:[RouterModule]
})
export class TopicsModule { 
}