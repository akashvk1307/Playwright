import { test } from "@playwright/test";

//Alert
test("Simple Alerts", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());
    dialog.accept();
  });
  await page.locator("//button[@class='btn btn-danger']").click();
});

//Confirm
test("Confirm Alerts", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.locator("//a[@href='#CancelTab']").click();
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());
    dialog.dismiss();
  });
  await page.locator("//button[@class='btn btn-primary']").click();
});

//Prompt
test("Prompt Alerts", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.locator("//a[@href='#Textbox']").click();
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());
    console.log(dialog.defaultValue());
    dialog.accept("hi");
  });
  await page.locator("//button[@class='btn btn-info']").click();
});
