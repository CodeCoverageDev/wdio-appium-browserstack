
class LoginPage {

    get emailInput () { return $('//android.widget.EditText[@index="0"]') };
    get passwordInput () { return $('//android.widget.EditText[@index="1"]') };
    
    get loginLabel () { return $('[data-testid="loginText"]') };
    get loginBtn () { return $('//android.view.ViewGroup[@resource-id="loginBtn"]') };

    get registerLabel () { return $('[data-testid="registerText"]') };
    get registerBtn () { return $('//android.view.ViewGroup[@resource-id="registerBtn"]') };
 
    get emailLabel () { return $('[data-testid="emailLabel"]') };
    get signoutLabel () { return $('[data-testid="signoutText"]') };
    get signoutBtn () { return $('//android.view.ViewGroup[@resource-id="signoutBtn"]') };

}


module.exports = new LoginPage();
