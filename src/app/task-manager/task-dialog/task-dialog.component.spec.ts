import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TaskDialogComponent } from './task-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

describe('TaskDialogComponent', () => {
  let component: TaskDialogComponent;
  let fixture: ComponentFixture<TaskDialogComponent>;
  let dialogRef: MatDialogRef<TaskDialogComponent>;

  class MatDialogRefMock {
    close(): void { }
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDialogComponent],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule, TranslateModule.forRoot()],
      providers: [
        TranslateService,
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(TaskDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when cancel is called', () => {
    const closeSpy = spyOn(dialogRef, 'close');
    component.cancel();
    expect(closeSpy).toHaveBeenCalled();
  });
});
