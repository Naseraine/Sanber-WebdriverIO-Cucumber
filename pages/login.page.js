class LoginPage{
    get usernameInput() {
        return $('#email'); // element field username
    }

    get passwordInput() {
        return $('#password'); // element field password
    }

    get loginButton() {
        return $('//button[@type="submit"]'); // element login button
    }
    
    get errorMsg() {
        return $("//div[@role='alert']"); // element error message
    }

    //Action Login
  
  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
    await browser.setTimeout({ 'implicit': 5000 })
    
  }

  async assertErrorMessage(expectedErrorMessage) {
    
    await expect(this.errorMsg).toHaveText(expectedErrorMessage);
  }

  async getErrorMessage() {
    return this.errorMsg.getText();
  }
}
module.exports = new LoginPage();