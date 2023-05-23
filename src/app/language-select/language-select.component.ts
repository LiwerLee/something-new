import { LocalStorageService } from './../service/local-storage.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService
  ) {

  }
  selectedLanguage: string = this.translate.currentLang;
  languages = [
    { value: 'en', display: 'English' },
    { value: 'zh-tw', display: '繁體中文' },
  ]

  onLanguageChange(event: any) {
    this.translate.use(event.value);
    this.localStorageService.setLanguage(event.value);
  }
}
