import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialsModule { }
