const LoginPage = require('../pageobjects/login.page');

describe('Login form', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.emailInput.setValue('Lim@example.com');
        await LoginPage.passwordInput.setValue('12345678');
        await LoginPage.loginBtn.click();

        await LoginPage.signoutBtn.waitForDisplayed({ timeout: 3000 })
    });
});


