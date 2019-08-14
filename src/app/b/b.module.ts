import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BComponent } from '../shared/b/b.component';
import { BothComponent } from '../shared/both/both.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'b',
    component : BComponent
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
export default class BModule { }
