const { I } = inject();
// Add in your custom step files

Given('I am on the login screen', () => {
  // From "features\basic.feature" {"line":7,"column":5}
  I.amOnPage('/')
  I.click('Login')
  I.waitForElement('#email', 10)
});

When('I fill the user field', () => {
  // From "features\basic.feature" {"line":8,"column":5}
  I.fillField('#user', 'wagner@gmail.com')
});

When('I fill the password field', () => {
  // From "features\basic.feature" {"line":9,"column":5}
  I.fillField('#password', secret('123456'))
  
});

When('I click on Login', () => {
  // From "features\basic.feature" {"line":10,"column":5}
  I.click('#btnLogin')
});

When('I am logged into the application', () => {
  // From "features\basic.feature" {"line":11,"column":5}
  I.see('Login realizado')
});
