 import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly signupHeading: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
 readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly createButton: Locator;
  readonly successMessage: Locator;

 constructor(page: Page) {
    this.page = page;

   this.signupHeading = page.locator('h2');
   this.firstNameInput = page.locator('//input[@id="first_name"]');
    this.lastNameInput = page.locator('//input[@id="last_name"]');
    this.emailInput = page.locator('//input[@id="email"]');
   this.passwordInput = page.locator('//input[@id="password"]');
    this.createButton = this.page.locator("input[value='Create']");
    this.successMessage = page.locator('text=Welcome');
  }

   async signup(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickCreateAccount();
      await this.page.goto('https://sauce-demo.myshopify.com/account/register');
      await expect(this.page.locator('text=Sign Up')).toBeVisible();
      await expect(this.firstNameInput).toBeVisible();
      await expect(this.lastNameInput).toBeVisible();
      await expect(this.emailInput).toBeVisible();
      await expect(this.passwordInput).toBeVisible();
      await expect(this.createButton).toBeVisible();
    }

    async enterFirstName(firstName: string) {
      await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName: string) {
      await this.lastNameInput.fill(lastName);
    }

    async enterEmail(email: string) {
      await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
      await this.passwordInput.fill(password);
    }

    async clickCreateAccount() {
      await this.createButton.click();
    }
  }











