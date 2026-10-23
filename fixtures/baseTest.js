const base = require('@playwright/test');
const LoginPage = require('../pages/loginPage')
const InventoryPage = require('../pages/inventoryPage');

const test = base.test.extend({
    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await use(loginPage);
    },
    inventoryPage:async({page},use)=>{
        await use(new InventoryPage(page));
    },
});
module.exports = { test, expect: base.expect };
