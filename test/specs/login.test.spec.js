describe('Login form', () => {
    it('should login with valid credentials', async () => {

        var emailInput = await $('//android.widget.EditText[@index="0"]');
        var passwordInput = await $('//android.widget.EditText[@index="1"]');
        var loginBtn = await $('//android.view.ViewGroup[@resource-id="loginBtn"]');
        var signoutBtn = await $('//android.view.ViewGroup[@resource-id="signoutBtn"]');
        
        // wait for the page to show up
        await loginBtn.waitForDisplayed({ timeout: 3000 });

        await emailInput.setValue('Lim@example.com');
        await passwordInput.setValue('12345678');
        await loginBtn.click();

        await signoutBtn.waitForDisplayed({ timeout: 3000 });
        await signoutBtn.click();
    });
});


