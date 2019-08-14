import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ThreeComponent } from '../shared/three/three.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'three',
    component: ThreeComponent
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
export class CModule { }
