import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MaterialModule } from './../../material/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports: [MaterialModule, TranslateModule.forRoot()],
      providers: [MatDialog, TranslateService],
    });
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog and add a task', () => {
    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of({ title: 'New Task', description: 'This is a new task.' }),
    } as MatDialogRef<TaskDialogComponent>);

    const initialTaskCount = component.tasks.length;
    component.openDialog();

    expect(dialog.open).toHaveBeenCalled();
    expect(component.tasks.length).toBe(initialTaskCount + 1);
  });

  it('should delete a task', () => {
    component.tasks = [
      { title: 'Task 1', description: 'Description 1' },
      { title: 'Task 2', description: 'Description 2' },
      { title: 'Task 3', description: 'Description 3' },
    ];

    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of({ title: 'New Task', description: 'This is a new task.' }),
    } as MatDialogRef<TaskDialogComponent>);

    const initialTaskCount = component.tasks.length;
    const indexToDelete = 0;

    component.openDialog();
    component.deleteTask(indexToDelete);

    expect(component.tasks.length).toBe(initialTaskCount);
  });

  it('should edit a task', () => {
    component.tasks = [
      { title: 'Task 1', description: 'Description 1' },
      { title: 'Task 2', description: 'Description 2' },
      { title: 'Task 3', description: 'Description 3' },
    ];

    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of({ title: 'New Task', description: 'This is a new task.' }),
    } as MatDialogRef<TaskDialogComponent>);

    const indexToEdit = 0;
    const updatedTask = { title: 'Updated Task', description: 'This task has been updated.' };
    const dialogRef = dialog.open(TaskDialogComponent, {
      data: { title: component.tasks[indexToEdit].title, description: component.tasks[indexToEdit].description }
    });
    spyOn(dialogRef, 'afterClosed').and.returnValue(of(updatedTask));

    component.editTask(indexToEdit);

    expect(dialog.open).toHaveBeenCalled();
    expect(component.tasks[indexToEdit]).toEqual(updatedTask);
  });
});
