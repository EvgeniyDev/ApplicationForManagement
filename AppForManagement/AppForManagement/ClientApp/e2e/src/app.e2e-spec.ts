import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should enable "Create note" button only if input fields are not empty', () => {
    page.navigateTo('/');

    let createNoteLink = element(by.linkText('Create Note'));

    let dummyName = 'One';
    let dummySurname = 'Two';
    let dummyAge = 18;

    let nameInputField = element(by.id('name'));
    let surnameInputField = element(by.id('surname'));
    let ageInputField = element(by.id('age'));

    let createNoteButton = element(by.buttonText('Create note'));

    createNoteLink.click();

    nameInputField.click();
    nameInputField.sendKeys(dummyName);
    
    surnameInputField.click();
    surnameInputField.sendKeys(dummySurname);

    expect(createNoteButton.isEnabled()).toBe(false);

    ageInputField.click();
    ageInputField.sendKeys(dummyAge);

    expect(createNoteButton.isEnabled()).toBe(true);
  });
});
