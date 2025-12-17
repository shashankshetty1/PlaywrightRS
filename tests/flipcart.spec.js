const { test, expect } = require('@playwright/test');

test('Automate Flipkart - Search Product', async ({ page, context }) => {

  await page.goto('https://www.flipkart.com');

  // Wait for page load
  await page.waitForLoadState('domcontentloaded');

  // Enter search term
  await page.locator('input[title="Search for Products, Brands and More"]').fill('vivo');
  await page.keyboard.press('Enter');

  // Wait for search results
  await page.waitForSelector("div[data-tkid]");

  // Click the first product (opens in a new tab)
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("div[data-tkid]").first().click()
  ]);

  // Wait for product page to load
  await newPage.waitForLoadState();

  // Wait for Add to Cart button and click
  await newPage.locator(".dSM5Ub.ugg2XR.IUmgrZ").click();

  console.log(await newPage.locator("div[class='TOm_Ti VYxWdo'] span").textContent())

  await newPage.waitForTimeout(1000);

  await newPage.locator("input[placeholder='Search for products, brands and more']").fill("shoes")
  await newPage.locator("svg[width='20']").click();
 

  const [ page2 ] = await Promise.all([
    newPage.context().waitForEvent('page'),
    newPage.locator(".MZeksS").first().click()
  ])

  await page2.waitForTimeout(2000)

});
