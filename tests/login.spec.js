const users = require("../data/user.json");
const { test, expect } = require("../fixtures/baseTest");
test.describe("Login", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test("Standard user can login", async ({ loginPage, inventoryPage, page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.title).toHaveText("Products");
  });
  test("locked_out_user should see an error", async ({ loginPage }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await expect(loginPage.errorMessage).toContainText("locked out");
  });
  test("wrong password shows an error", async ({ loginPage }) => {
    await loginPage.login(
      users.wrongPassword.username,
      users.wrongPassword.password,
    );
    await expect(loginPage.errorMessage).toContainText("do not match");
  });
  test("empty username should show error", async ({ loginPage }) => {
    await loginPage.login("", "");
    await expect(loginPage.errorMessage).toContainText("Username is required");
  });
});
