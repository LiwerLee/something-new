import { MaterialModule } from './material/material.module';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, LanguageSelectComponent, NavigationComponent],
    imports: [RouterTestingModule, TranslateModule.forRoot(), MaterialModule],
    providers: [TranslateService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
