import { test, expect } from "@playwright/test";

test("Demo Automation", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Index.html");
  let title = page.title();
  let url = page.url();
  await expect(page).toHaveTitle("Index");
  console.log("Page Url & Title" + title + url);
  page.locator("//img[@id='enterimg']").click();
  await expect(page).toHaveURL(
    "https://demo.automationtesting.in/Register.html",
  );
  await expect(page).toHaveTitle("Register");
  await page.locator("//input[@placeholder='First Name']").fill("Akash");
  await page.locator("//input[@placeholder='Last Name']").fill("Veerappan");
  await page
    .locator("//select[@id='Skills']")
    .selectOption({ label: "AutoCAD" });
  await page.locator("//a[text()='SwitchTo']").click();
  await page.locator("//a[@href='Alerts.html']").click();
  await expect(page).toHaveTitle("Alerts");
  await expect(page).toHaveURL("https://demo.automationtesting.in/Alerts.html");
  page.once("Dialog", async (dialog) => {
    await dialog.accept();
  });
  await page.locator("//button[@class='btn btn-danger']").click();
  page.once("Dialog", async (dialog) => {
    await dialog.accept();
  });
  await page.locator("//a[@href='#CancelTab']").click();
  page.once("Dialog", async (dialog) => {
    await dialog.dismiss();
  });
  await page.locator("//button[@class='btn btn-primary']").click();
  await page.locator("//a[@href='#Textbox']").click();
  page.once("Dialog", async (dialog) => {
    let prompt = "Yes, I am.";
    await dialog.accept(prompt);
  });
  await page.locator("//button[@class='btn btn-info']").click();
});
