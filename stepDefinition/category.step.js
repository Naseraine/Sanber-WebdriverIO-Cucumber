const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require('../pages/page');
const LoginPage = require('../pages/login.page');
const CategoryPage = require('../pages/category.page');

Given(/^I open KasirAJA website$/, async() => {
    await Page.open('/') 
})
When(/^I login with valid credential$/, async() => {
    await LoginPage.login('toko_naser@gmail.com', 'toko_naser123');
})
When(/^I select category tab$/, async() => {
    await CategoryPage.category()
})
When(/^I click add button$/, async() => {
    await CategoryPage.add()
})
When(/^I click save button$/, async() => {
    await CategoryPage.save();
})
Then(/^I see an alert message$/, async() => {
    await CategoryPage.assertAlertMessage('"name" is not allowed to be empty')
})

When(/^I fill field$/, async () => {
    await CategoryPage.isiData('Nama Category', 'Deskripsi Category');
})
Then(/^I should see pop up success message$/, async() => {
    await CategoryPage.assertSuccessMessage('item ditambahkan');
})