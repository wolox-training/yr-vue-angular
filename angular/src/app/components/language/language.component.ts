import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  public languageSelected = 'es';
  public languages = [
    { key: 'en', value: 'English' },
    { key: 'es', value: 'Español' },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');
    this.changeLanguage();
  }

  changeLanguage(): void {
    this.translate.use(this.languageSelected);
  }
}
