const assert = require('assert');

describe('SauceDemo Test', () => {
it('should open saucedemo.com and assert the URL', async () => {
// Buka URL
awaitbrowser.url('https://www.saucedemo.com');

// Lakukan assertion pada URL
constcurrentURL = awaitbrowser.getUrl();
constexpectedURL = 'https://www.saucedemo.com/';

awaitassert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
    });
});