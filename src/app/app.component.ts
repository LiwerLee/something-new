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
    private globalVariableService: GlobalVariableService
  ) {
    translate.setDefaultLang('zh-tw');
    translate.use('zh-tw');
  }
  ngOnInit(): void {
    this.currentPageSubscription = this.globalVariableService.currentPage$
      .subscribe((page: string) => {
        console.log(page)
        this.currentPage = page
      });
  }
  ngOnDestroy(): void {
    console.log('destory')
    this.currentPageSubscription.unsubscribe();
  }
  title = 'something-new';
}
