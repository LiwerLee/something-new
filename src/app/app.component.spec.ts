import { LocalStorageService } from './service/local-storage.service';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GlobalVariableService } from './service/global-variable.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let translateService: TranslateService;
  let globalVariableService: GlobalVariableService;
  let localStorageService: LocalStorageService;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, LanguageSelectComponent, NavigationComponent, FooterComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MaterialModule],
      providers: [TranslateService, LocalStorageService]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    globalVariableService = TestBed.inject(GlobalVariableService);
    localStorageService = TestBed.inject(LocalStorageService);

  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set the current page on subscription', () => {
    const page = 'home';
    spyOn(globalVariableService.currentPage$, 'subscribe').and.callThrough();

    component.ngOnInit();
    globalVariableService.setCurrentPage(page);

    expect(globalVariableService.currentPage$.subscribe).toHaveBeenCalled();
    expect(component.currentPage).toBe(page);
  });

  it('should unsubscribe from currentPageSubscription on ngOnDestroy', () => {
    const mockSubscription = jasmine.createSpyObj('Subscription', ['unsubscribe']);
    component['currentPageSubscription'] = mockSubscription;

    component.ngOnDestroy();

    expect(mockSubscription.unsubscribe).toHaveBeenCalled();
  });

  it('should use the language from LocalStorageService', () => {
    const language = 'en';
    spyOn(localStorageService, 'getLanguage').and.returnValue(language);
    spyOn(translateService, 'use').and.callThrough();

    new AppComponent(translateService, globalVariableService, localStorageService);

    expect(localStorageService.getLanguage).toHaveBeenCalled();
    expect(translateService.use).toHaveBeenCalledWith(language);
  });

});
