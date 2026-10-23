const { test, expect } = require("@playwright/test");
const LoginPage  = require("../pages/loginPage");
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
});
