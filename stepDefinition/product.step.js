const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require('../pages/page');
const LoginPage = require('../pages/login.page');
const ProductPage = require('../pages/product.page');

Given(/^I open KasirAJA website$/, async() => {
    await Page.open('/') 
})
When(/^I login with valid credential$/, async() => {
    await LoginPage.login('toko_naser@gmail.com', 'toko_naser123');
})
When(/^I select product tab$/, async() => {
    await ProductPage.product()
})
When(/^I click add button$/, async() => {
    await ProductPage.add()
})
When(/^I click save button$/, async() => {
    await ProductPage.save();
})
Then(/^I see an alert message$/, async() => {
    await ProductPage.assertAlertMessage('"name" is not allowed to be empty')
})

When(/^I fill field$/, async () => {
    await ProductPage.isiData('Nama Product', 'Deskripsi Product', '1000', '50000','2');
    await ProductPage.kategori();
})
Then(/^I should see pop up success message$/, async() => {
    await ProductPage.assertSuccessMessage('item ditambahkan');
})