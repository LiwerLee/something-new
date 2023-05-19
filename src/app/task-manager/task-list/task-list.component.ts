import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: any[] = [];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '300px',
      data: { title: '', description: '' },
      position: {
        left: 'calc(50vw - 150px)'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks.push(result);
      }
    });
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  editTask(index: number): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '300px',
      data: { title: this.tasks[index].title, description: this.tasks[index].description }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks[index] = result;
      }
    });
  }
}
