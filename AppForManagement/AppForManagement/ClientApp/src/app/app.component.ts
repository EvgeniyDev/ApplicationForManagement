import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'NoteManagement';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ua', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru|ua/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
