//import test & expect from playwright test library
// test --> to write block code for testing
// expect --> to check/verify output, always given true or false

import { test, expect, chromium } from "@playwright/test";

test("Launch", async () => {
  let browser = await chromium.launch(); // open or lanch browser (chrom, firefox, webkit)
  let context = await browser.newContext(); // open context in particular browser
  let page = await context.newPage(); // open the page in that context
  await page.goto("https://www.w3schools.com/"); // open link || goto is one defult method in palywright
  let title = await page.title();
  let url = page.url();
  await expect(page).toHaveTitle("W3Schools Online Web Tutorials");
  await expect(page).toHaveURL("https://www.w3schools.com/");
  console.log("Web Page Title is:", title);
  console.log("URL of the web page is:", url);
});

// fixtuer using
test("LaunchJs", async ({ page }) => {
  await page.goto("https://www.w3schools.com/js/default.asp");
  let title = await page.title();
  let url = page.url();
  if (title === "JavaScript Tutorial") {
    console.log("Web Page Title is:", title);
    if (url === "https://www.w3schools.com/js/default.asp") {
      console.log("URL of the web page is:", url);
    } else {
      console.log("Pls verify the URL");
    }
  } else {
    console.log("Pls check Title of Web Page");
  }
  await expect(page).toHaveTitle("JavaScript Tutorial");
  await expect(page).toHaveURL("https://www.w3schools.com/js/default.asp");
});
