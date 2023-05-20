import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSelectComponent } from './language-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LanguageSelectComponent', () => {
  let component: LanguageSelectComponent;
  let fixture: ComponentFixture<LanguageSelectComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageSelectComponent],
      imports: [TranslateModule.forRoot(), FormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [TranslateService]
    });
    fixture = TestBed.createComponent(LanguageSelectComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the language', () => {
    translateService.setDefaultLang('zh-tw')
    spyOn(translateService, 'use');

    const newLanguage = 'en';
    component.onLanguageChange({ value: newLanguage });

    expect(translateService.use).toHaveBeenCalledWith(newLanguage);
  });
});
