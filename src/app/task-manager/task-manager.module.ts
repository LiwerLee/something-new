import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TaskListComponent }
    ]),
    FormsModule,
    MaterialModule
  ]
})
export class TaskManagerModule { }
