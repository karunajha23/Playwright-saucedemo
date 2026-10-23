class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.getByPlaceholder("Username");
    this.passwordField = page.getByPlaceholder("Password");
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async open() {
    await this.page.goto("https://www.saucedemo.com/");
  }
  async login(userName, password) {
    await this.usernameField.fill(userName);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }
}
module.exports = LoginPage;