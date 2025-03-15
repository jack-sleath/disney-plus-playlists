// loginHelper.js
async function login(page, username, password) {
    
    //check for if logged in

    await page.click('#onetrust-accept-btn-handler');
    await page.waitForTimeout(1000);
    await page.click('a[href="/identity/login"]');
    await page.waitForURL('**/identity/login/enter-email');
    await page.click('#email');
    await page.fill('#email', username);
    await page.click('button[data-testid="continue-btn"]');
    await page.click('#password');
    await page.fill('#password', password);
    await page.click('text="Log In"');
}

module.exports = { login };
