import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from '../shared/a/a.component';
import { BothComponent } from '../shared/both/both.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'a',
    component : AComponent
  },
  {
    path: 'both',
    component : BothComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AModule { }
