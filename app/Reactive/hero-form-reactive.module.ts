import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule }              from '../shared/shared.module';
import { HeroFormReactiveComponent } from './hero-form-reactive.component';
import { UserFormComponent} from './user-form.component';

@NgModule({
  imports:      [ SharedModule, ReactiveFormsModule ],
  declarations: [ HeroFormReactiveComponent ,UserFormComponent],
  exports:      [ HeroFormReactiveComponent ]
})
export class HeroFormReactiveModule { }
