import { MaterialModule } from './material/material.module';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, TranslateModule.forRoot(), MaterialModule],
    declarations: [AppComponent, LanguageSelectComponent],
    providers: [TranslateService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
