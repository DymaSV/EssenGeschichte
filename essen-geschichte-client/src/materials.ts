import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule
  ]
})
export class MyMaterialModule {}
