import { test, expect } from "@playwright/test";

//static web table
test("Web Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //find table location
  page.locator("//table[@name='BookTable']");
  //find 2nd row in table with data
  let rowName = await page
    .locator("((//table//tbody//tr)[2]//td)") // [] value based on lenght not index
    .allTextContents();
  console.log(rowName);
  //find multi row values
  let rowArray = [
    await page.locator("((//table//tbody//tr)[1]//th)").allTextContents(),
    await page.locator("((//table//tbody//tr)[2]//td)").allTextContents(),
  ];
  console.log(rowArray);
  //find particular element or data
  console.log(
    await page.locator("((//table//tbody//tr)[7]//td)[3]").allInnerTexts(),
  );

  // using first() & nth() method
  let row = page.locator("//table//tbody//tr").nth(6); // () value based index not lenght
  let cell = row.locator("//td").nth(0);
  console.log(await cell.allTextContents());
});

//dynamic web table
test("Dynamic Web Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  let table = page.locator("//table[@id='taskTable']");
  let header = table.locator("//thead//tr");
  let row = table.locator("//tbody//tr");
  console.log(await header.count());
  console.log(await row.count());
  let headerCell = header.locator("//th");
  console.log(await headerCell.nth(2).allInnerTexts());
  let rowCell = row.locator("//td");
  console.log(await rowCell.nth(2).allInnerTexts());
});


