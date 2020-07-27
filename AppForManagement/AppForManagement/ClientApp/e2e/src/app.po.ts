import { browser } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(url);
  }
}
