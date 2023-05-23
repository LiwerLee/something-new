import { LocalStorageService } from './service/local-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { GlobalVariableService } from './service/global-variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private currentPageSubscription: Subscription = new Subscription();
  currentPage: string = '';
  constructor(
    private translate: TranslateService,
    private globalVariableService: GlobalVariableService,
    private localStorageService: LocalStorageService
  ) {
    const language = this.localStorageService.getLanguage();
    this.translate.use(language);
  }
  ngOnInit(): void {
    this.currentPageSubscription = this.globalVariableService.currentPage$
      .subscribe((page: string) => {
        this.currentPage = page
      });
  }
  ngOnDestroy(): void {
    console.log('destory')
    this.currentPageSubscription.unsubscribe();
  }

}
