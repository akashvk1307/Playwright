import { test, expect } from "@playwright/test";

//locators
test("Locator", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
  await expect(page).toHaveURL("https://www.google.com/");
  let searchBox = page.locator("//textarea[@class='gLFyf']"); // save xpath in a veriable
  await searchBox.fill("orangehrm"); //fill method
  // Retrieve and log the text value
  //   const inputText = await searchBox.inputValue();
  //   console.log(inputText);
  await page.locator("//input[@value='Google Search']").first().click();
});

//locators with login (OrangeHRM website)
test("Login Orange HRM", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",);
  await expect(page).toHaveTitle("OrangeHRM");
  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@name='password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",);
  // check string in 2nd page
  const dashboardHeader = page.locator("//h6[text()='Dashboard']");
  await expect(dashboardHeader).toBeVisible();
  //test in 2nd page
  await page.locator("//span[@class='oxd-userdropdown-tab']").click();
  await page.locator("//a[text()='Logout']").click();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await expect(page).toHaveTitle("OrangeHRM");
});

// loctors with (Practics Test Automation website)

// +ve login test
test("Positive Login Test Automation", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  // find text
  let heading = page.locator("//h2[text()='Test login']");
  await expect(heading).toBeVisible();
  // input process
  await page.locator("//input[@id='username']").fill("student");
  await page.locator("//input[@id='password']").fill("Password123");
  await page.locator("//button[@id='submit']").click();
  await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
  await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation");
  page.locator(
    "//strong[contains(text(),'Congratulations' or 'successfully logged in')]",
  );
  await page.locator("//a[text()='Log out']").click
});

// -ve User login test
test("Negative User Login Test Automation", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  // input process
  await page.locator("//input[@id='username']").fill("Akash");
  await page.locator("//input[@id='password']").fill("Password123");
  await page.locator("//button[@id='submit']").click();
  // error text
  let error = page.locator("//div[text()='Your username is invalid!']");
  await expect(error).toBeVisible();
});

// -ve Password login test
test("Negative Password Login Test Automation", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  // input process
  await page.locator("//input[@id='username']").fill("student");
  await page.locator("//input[@id='password']").fill("Student123");
  await page.locator("//button[@id='submit']").click();
  // error text
  let error = page.locator("//div[text()='Your password is invalid!']");
  await expect(error).toBeVisible();
});