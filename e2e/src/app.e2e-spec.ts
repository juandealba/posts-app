import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {

  it('should route to login page when attempting to access profile', () => {
    browser.get('/profile');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/#/authenticate');
  });

  it('should disable login button when invalid email ', () => {
    var email = element(by.name('aa'));
    email.clear();
    email.sendKeys('noexisting@april.');
    browser.sleep(2000);
    var loginButton = element(by.name('loginButton'));
    expect(loginButton.isEnabled()).toBeFalsy();
  });

  it('should get error message when email does not exist ', () => {
    var email = element(by.name('aa'));
    email.clear();
    email.sendKeys('noexisting@april.biz');

    var loginButton = element(by.name('loginButton'));
    loginButton.click();
    var error = element(by.name('errorMessageLogin')).getText();
    expect(error).toEqual('Email Not Found');
  });

  it('should logout ', () => {
    var email = element(by.name('aa'));
    email.clear();
    email.sendKeys('Sincere@april.biz');

    var loginButton = element(by.name('loginButton'));
    loginButton.click();
    browser.sleep(1000);

    var hamButton = element(by.name('hamButton'));
    hamButton.click();  
    var outButton = element(by.name('outButton'));
    outButton.click();  

    loginButton = element(by.name('loginButton'));
    expect(loginButton).toBeDefined()
  }); 


  it('should login and retrieve data for email ', () => {
    var email = element(by.name('aa'));
    email.clear();
    email.sendKeys('Sincere@april.biz');

    var loginButton = element(by.name('loginButton'));
    loginButton.click();
    browser.sleep(1000);

    var postCardTitle = element(by.name('postCardTitle')).getText();
    expect(postCardTitle).toEqual('Posts by Leanne Graham');
  }); 


});
