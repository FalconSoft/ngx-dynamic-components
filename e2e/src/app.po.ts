import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo(): promise.Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): promise.Promise<string> {
    return element(by.css('dc-root h1')).getText() as Promise<string>;
  }
}
