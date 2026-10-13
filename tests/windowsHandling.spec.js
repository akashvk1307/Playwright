import { test } from "@playwright/test";

//Open New Tabbed Windows
test("Windows Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  let newTab = page.waitForEvent("popup");
  await page.locator("//button[@class='btn btn-info']").first().click();
  let selenium = await newTab;
  await selenium.locator("//a[@href='/downloads']").click();
});

//Open New Tabbed Windows with Promise
test("Windows Handling with promise", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  let [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("//button[@class='btn btn-info']").first().click(),
  ]);
  await newPage.locator("//a[@href='/downloads']").click();
});

//Open New Windows with Promise
test("Windows Handling with promise new window", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  await page.locator("//a[@href='#Seperate']").click();
  let [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("//button[@class='btn btn-primary']").first().click(),
  ]);
  await newPage.locator("//a[@href='/downloads']").click();
});
