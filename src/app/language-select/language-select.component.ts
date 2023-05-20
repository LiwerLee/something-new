import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  constructor(private translate: TranslateService) {

  }
  selectedLanguage: string = this.translate.currentLang;
  languages = [
    { value: 'en', display: 'English' },
    { value: 'zh-tw', display: '繁體中文' },
  ]

  onLanguageChange(event: any) {
    this.translate.use(event.value);
  }
}
