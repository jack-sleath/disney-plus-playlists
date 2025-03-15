const { chromium } = require('playwright');
const { login } = require('./loginHelper');
const fs = require('fs');

(async () => {
  // decide if using pre logged in session

  // Launch the browser
  //const browser = await chromium.launch({ headless: false });
  //const context = await browser.newContext();


  // Note: Make sure no other Chrome instance is using this profile.
  const userDataDir = '';
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    // Optionally specify the Chrome executable path if needed.
  });

  const page = await context.newPage();

  // Navigate to Disney Plus
  await page.goto('https://www.disneyplus.com/');

  await login(page, '', '');

  // For testing: pause the execution to see the browser state
  await page.pause();

  // Close the browser after inspection
  await browser.close();
})();
