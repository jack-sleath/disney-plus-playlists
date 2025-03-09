const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Disney Plus
  await page.goto('https://www.disneyplus.com/');

  // For testing: pause the execution to see the browser state
  await page.pause();

  // Close the browser after inspection
  await browser.close();
})();
