# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locators.spec.js >> Locator
- Location: tests\locators.spec.js:4:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.google.com/"
Received: "https://www.google.com/?zx=1792233363132"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html itemscope="" lang="en-IN" itemtype="http://schema.org/WebPage">…</html>
       - unexpected value "https://www.google.com/?zx=1792233363132"

```

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img "Google"
- search:
  - button "Add files and tools"
  - combobox "Search"
  - button "Search by voice"
  - button "Search by image"
  - link "AI Mode"
  - button "Create images"
  - button "Ask about files"
  - button "Brainstorm"
  - button "I am feeling lucky"
- img
- text: Enjoy festive savings on Pixel 11.
- link "Offers are live on the Google Store 🪔"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCCw
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCC0
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCC4
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCC8
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCDA
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCDE
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCDI
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCDM
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_2KKOzw-crgYST0vdakL5nTOigCU%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwj-m4jD7cCXAxVFkuEIHbHfLA0Q2ZgBCDQ
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | //locators
  4  | test("Locator", async ({ page }) => {
  5  |   await page.goto("https://www.google.com/");
  6  |   await expect(page).toHaveTitle("Google");
> 7  |   await expect(page).toHaveURL("https://www.google.com/");
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  8  |   let searchBox = page.locator("//textarea[@class='gLFyf']"); // save xpath in a veriable
  9  |   await searchBox.fill("orangehrm"); //fill method
  10 |   // Retrieve and log the text value
  11 |   //   const inputText = await searchBox.inputValue();
  12 |   //   console.log(inputText);
  13 |   await page.locator("//input[@value='Google Search']").first().click();
  14 | });
  15 | 
  16 | //locators with login (OrangeHRM website)
  17 | test("Login Orange HRM", async ({ page }) => {
  18 |   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",);
  19 |   await expect(page).toHaveTitle("OrangeHRM");
  20 |   await page.locator("//input[@name='username']").fill("Admin");
  21 |   await page.locator("//input[@name='password']").fill("admin123");
  22 |   await page.locator("//button[@type='submit']").click();
  23 |   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",);
  24 |   // check string in 2nd page
  25 |   const dashboardHeader = page.locator("//h6[text()='Dashboard']");
  26 |   await expect(dashboardHeader).toBeVisible();
  27 |   //test in 2nd page
  28 |   await page.locator("//span[@class='oxd-userdropdown-tab']").click();
  29 |   await page.locator("//a[text()='Logout']").click();
  30 |   await expect(page).toHaveURL(
  31 |     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  32 |   );
  33 |   await expect(page).toHaveTitle("OrangeHRM");
  34 | });
  35 | 
  36 | // loctors with (Practics Test Automation website)
  37 | 
  38 | // +ve login test
  39 | test("Positive Login Test Automation", async ({ page }) => {
  40 |   await page.goto("https://practicetestautomation.com/practice-test-login/");
  41 |   // find text
  42 |   let heading = page.locator("//h2[text()='Test login']");
  43 |   await expect(heading).toBeVisible();
  44 |   // input process
  45 |   await page.locator("//input[@id='username']").fill("student");
  46 |   await page.locator("//input[@id='password']").fill("Password123");
  47 |   await page.locator("//button[@id='submit']").click();
  48 |   await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
  49 |   await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation");
  50 |   page.locator(
  51 |     "//strong[contains(text(),'Congratulations' or 'successfully logged in')]",
  52 |   );
  53 |   await page.locator("//a[text()='Log out']").click
  54 | });
  55 | 
  56 | // -ve User login test
  57 | test("Negative User Login Test Automation", async ({ page }) => {
  58 |   await page.goto("https://practicetestautomation.com/practice-test-login/");
  59 |   // input process
  60 |   await page.locator("//input[@id='username']").fill("Akash");
  61 |   await page.locator("//input[@id='password']").fill("Password123");
  62 |   await page.locator("//button[@id='submit']").click();
  63 |   // error text
  64 |   let error = page.locator("//div[text()='Your username is invalid!']");
  65 |   await expect(error).toBeVisible();
  66 | });
  67 | 
  68 | // -ve Password login test
  69 | test("Negative Password Login Test Automation", async ({ page }) => {
  70 |   await page.goto("https://practicetestautomation.com/practice-test-login/");
  71 |   // input process
  72 |   await page.locator("//input[@id='username']").fill("student");
  73 |   await page.locator("//input[@id='password']").fill("Student123");
  74 |   await page.locator("//button[@id='submit']").click();
  75 |   // error text
  76 |   let error = page.locator("//div[text()='Your password is invalid!']");
  77 |   await expect(error).toBeVisible();
  78 | });
```