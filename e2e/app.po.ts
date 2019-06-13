import { browser, element, by } from 'protractor';

export class MacheteUiPage {
  navigateTo() {
    return browser.get('/V2/welcome');
  }

  getParagraphText() {
    return element(by.css('app-welcome div p')).getText();
  }
}
