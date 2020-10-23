import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {RulesFormComponent} from './rules-form.component';
import {RulesControlsComponent} from './rules-control/rules-controls.component';


@NgModule({
  declarations: [
    RulesFormComponent,
    RulesControlsComponent
  ],
  exports: [
    RulesFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RulesFormModule { }
