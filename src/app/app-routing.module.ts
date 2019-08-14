import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./a/a.module').then(a => a.AModule)
  },
  {
    path: 'b',
    loadChildren: () => import('./b/b.module').then(b => b.BModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
