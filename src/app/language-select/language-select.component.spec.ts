import { LocalStorageService } from './../service/local-storage.service';
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
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageSelectComponent],
      imports: [TranslateModule.forRoot(), FormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [TranslateService, LocalStorageService]
    });
    fixture = TestBed.createComponent(LanguageSelectComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    localStorageService = TestBed.inject(LocalStorageService);
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorageService.clear();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the language', () => {
    translateService.setDefaultLang('zh-tw')
    spyOn(translateService, 'use');
    spyOn(localStorageService, 'setLanguage');

    const newLanguage = 'en';
    component.onLanguageChange({ value: newLanguage });

    expect(translateService.use).toHaveBeenCalledWith(newLanguage);
    expect(localStorageService.setLanguage).toHaveBeenCalledWith(newLanguage);
  });
});
