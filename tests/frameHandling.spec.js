import { test, expect } from "@playwright/test";



//Single Frame
test("Frame Handling - Single Frame", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Index.html");
  page.locator("//img[@id='enterimg']").click();
  await expect(page).toHaveURL(
    "https://demo.automationtesting.in/Register.html",
  );
  await page.locator("//a[text()='SwitchTo']").click();
  await page.locator("//a[@href='Frames.html']").click();
  await expect(page).toHaveTitle("Frames");
  await expect(page).toHaveURL("https://demo.automationtesting.in/Frames.html");
  await page
    .frameLocator("//iframe[@id='singleframe']")
    .locator("//input[@type='text']")
    .fill("Hi Sir, How are yoy?");
});



// Multi Frame
test("Frame Handling - Multi Frame", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Index.html");
  page.locator("//img[@id='enterimg']").click();
  await expect(page).toHaveURL(
    "https://demo.automationtesting.in/Register.html",
  );
  await page.locator("//a[text()='SwitchTo']").click();
  await page.locator("//a[@href='Frames.html']").click();
  await expect(page).toHaveTitle("Frames");
  await expect(page).toHaveURL("https://demo.automationtesting.in/Frames.html");
  await page.locator("//a[@href='#Multiple']").click();
  await page
    .frameLocator("//iframe[@src='MultipleFrames.html']")
    .frameLocator("//iframe[@src='SingleFrame.html']")
    .locator("//input[@type='text']")
    .fill("Hi I'm Sir, How are you?");
});
