import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { BothComponent } from './both/both.component';

@NgModule({
  declarations: [AComponent, BComponent, BothComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
