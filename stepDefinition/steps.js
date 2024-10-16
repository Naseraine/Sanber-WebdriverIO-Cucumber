const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require('../pages/page');
const LoginPage = require('../pages/login.page');


Given(/^I open KasirAJA website$/, async () => {
        await Page.open('/') 
})
When(/^I login with invalid credential$/, async () => {
    await LoginPage.login('toko_naser@gmail.com', 'test23');
})
Then(/^I should see an error message credential$/, async () => {
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
})

When(/^I login with valid credential$/, async () => {
    await LoginPage.login('toko_naser@gmail.com', 'toko_naser123');
})
Then(/^I should be on dashboard page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard');
})