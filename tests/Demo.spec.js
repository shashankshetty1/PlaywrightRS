// @ts-check
import { test, expect } from '@playwright/test';

test('DemoBlaze test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  console.log(await page.title());
  // await page.locator("#signin2").click();

  // await page.waitForTimeout(1000);

  // await page.locator("#sign-username").fill("RamShetty3");
  // await page.locator("#sign-password").fill("123456");

 


  // await page.locator("button[onclick='register()']").click();

   // 1. Set the alert handler BEFORE clicking
  //  page.once('dialog', async dialog => {
  //   console.log("Alert text:", dialog.message());
  //   await dialog.accept();
  // });

  // await page.locator("button[onclick='register()']").click();

  // await page.waitForTimeout(5000);  
  // await page.screenshot({ path: 'demo-screenshot.png', fullPage: true });

  ///////
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("RamShetty3");
  await page.locator("#loginpassword").fill("123456");
  await page.locator("button[onclick='logIn()']").click();

  await page.locator("#tbodyid#tbodyid .card img").first().click()
  await page.locator(".btn.btn-success.btn-lg").click()
 

  await page.locator("#cartur").click()
  await page.waitForTimeout(2000);

  await page.locator(".btn.btn-success").click();
  await page.waitForTimeout(1000);
  await page.locator("#name").fill("My MObile");
  await page.locator("#country").fill("Argentina");
  await page.locator("#city").fill("Rosoria");
  await page.locator("#card").fill("AXIS-bank 420");
  await page.locator("#month").fill("june");
  await page.locator("#year").fill("1987");

  await page.locator("button[onclick='purchaseOrder()']").click();
  await page.screenshot({ path: 'purcase-screenshot.png', fullPage: true });

  await page.locator(".confirm.btn.btn-lg.btn-primary").click()
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'afterpurcase-screenshot.png', fullPage: true });

  await page.waitForTimeout(3000)



});


