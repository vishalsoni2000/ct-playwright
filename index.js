const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the website
  await page.goto('https://partner.ascentfunding.com/codingtemple/');

  // Wait for the email input field and fill it
  await page.waitForSelector('#u-email');
  await page.fill('#u-email', 'your_email@example.com');

  // Wait for the course selection field and fill it
  await page.waitForSelector('#enterprise_loan_form_program_selector');
  await page.selectOption('#enterprise_loan_form_program_selector', 'Quality Assurance');

  // Wait for the link to be clickable and click it
  await page.waitForSelector('.comparison-table .table-col:nth-child(2) a');
  await page.click('.comparison-table .table-col:nth-child(2) a');

  // Wait for some time to observe the result
  await page.waitForTimeout(10000);  // 10 seconds

  // Close the browser
  await browser.close();
})();
