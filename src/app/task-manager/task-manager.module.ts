import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    TaskDialogComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TaskListComponent }
    ]),
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule.forChild()
  ]
})
export class TaskManagerModule { }
