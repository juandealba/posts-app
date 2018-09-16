import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToLogin() {
    return browser.get('/authenticate');
  }

  navigateToProfile() {
    return browser.get('/profile');
  }
  getTitleText() {
    return element(by.id('#postTitle')).getText();
  }

  getUrl(){
    return browser.getCurrentUrl();
  }
}
