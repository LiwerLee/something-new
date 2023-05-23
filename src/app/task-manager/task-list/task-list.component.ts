import { LocalStorageService } from './../../service/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { GlobalVariableService } from 'src/app/service/global-variable.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from '../interface/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    public dialog: MatDialog,
    private translate: TranslateService,
    private globalVariableService: GlobalVariableService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.globalVariableService.setCurrentPage('taskManager'));
    this.tasks = this.localStorageService.getTaskList();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '300px',
      data: { header: 'createTask', title: '', description: '' },
      position: {
        left: 'calc(50vw - 150px)'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks.push(result);
        this.localStorageService.setTaskList(this.tasks);
      }
    });
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.localStorageService.setTaskList(this.tasks);
  }

  editTask(index: number): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '300px',
      data: { header: 'editTask', title: this.tasks[index].title, description: this.tasks[index].description }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks[index] = result;
        this.localStorageService.setTaskList(this.tasks);
      }
    });
  }
}
