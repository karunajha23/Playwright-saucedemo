const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");
const InventoryPage = require("../pages/inventoryPage");
const users = require("../data/user.json");

test.describe("Login", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("Stanard user can login", async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    const inventoryPage = new InventoryPage(page);
    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.title).toHaveText("Products");
  });
  test("locked_out_user should see an error", async ({ page }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await expect(loginPage.errorMessage).toContainText("locked out");
  });
  test("wrong password shows an error", async ({}) => {
    await loginPage.login(
      users.wrongPassword.username,
      users.wrongPassword.password,
    );
    await expect(loginPage.errorMessage).toContainText("do not match");
  });
  test("empty username should show error", async () => {
    await loginPage.login("", "");
    await expect(loginPage.errorMessage).toContainText("Username is required");
  });
});
