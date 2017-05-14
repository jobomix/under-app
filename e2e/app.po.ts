import { browser, element, by } from 'protractor';

export class UnderAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('users h1')).getText();
  }
}
