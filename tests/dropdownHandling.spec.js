import { test, expect } from "@playwright/test";

//drop down handling (Globalsqa website)
//Native Drop down handling using selectOption method
test("Drop Down", async ({ page }) => {
  await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
  let dropdown = page.locator("//select");
  await dropdown.selectOption({ value: "AFG" });
  await dropdown.selectOption({ label: "Afghanistan" });
  await dropdown.selectOption({ index: 10 });
  // await dropdown.selectOption('AND');
  console.log(await dropdown.inputValue);
});

// Automation testing Practice website
//native method
test("Native dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //check page title
  await expect(page).toHaveTitle("Automation Testing Practice");
  //check heading in body
  let heading = page.locator("//h3[text()='Data Entry Form']");
  expect(heading).toBeVisible;
  // fill name
  await page.locator("//input[@id='name']").fill("Sri");
  await page.locator("//input[@id='email']").fill("sri@gmail.com");
  await page.locator("//input[@id='phone']").fill("9012345678");
  await page
    .locator("//textarea[@id='textarea']")
    .fill("Hi I'm Sir,Now I'm study Playwright,how to use locators & dropdown");
  await page.locator("//input[@id='male']").click();
  await page.locator("//input[@id='sunday']").click();
  await page
    .locator("//select[@id='country']")
    .selectOption({ value: "india" });
});

//Custom dropdown
test("Custom dropdown", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",);
  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@name='password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  //custom dropdown
  await page.locator("//span[@class='oxd-userdropdown-tab']").click();
  await page.locator("//a[text()='Logout']").click();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await expect(page).toHaveTitle("OrangeHRM");
});