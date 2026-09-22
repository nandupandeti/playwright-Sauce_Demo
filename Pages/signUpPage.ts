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

   async navigateToSignup() {
   await this.page.goto('https://sauce-demo.myshopify.com/account/register');
  }

  async verifySignupPage() {
   // await expect(this.signupHeading).toBeVisible();
     await expect(this.page.locator('text=Sign Up')).toBeVisible();
   }

   async verifyFirstNameField() {
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.firstNameInput).toBeEnabled();
  }

   async enterFirstName(firstName: string) {
     await this.firstNameInput.fill(firstName);
     await expect(this.firstNameInput).toHaveValue(firstName);
  }


   async verifylastNameField() {
    await expect(this.lastNameInput).toBeVisible();
     await expect(this.lastNameInput).toBeEnabled();
  }

  async enterLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
     await expect(this.lastNameInput).toHaveValue(lastName);
   }

  async enterEmail(email: string) {
     await this.emailInput.fill(email);
     await expect(this.emailInput).toHaveValue(email);
  }

   async enterPassword(password: string) {
    await this.passwordInput.fill(password);
     await expect(this.passwordInput).toHaveValue(password);
   }

   async verifyCreateButton() {
    await expect(this.createButton).toBeVisible();
    await expect(this.createButton).toBeEnabled();
  }

  async clickCreate() {
     await this.createButton.click();
   }

   async verifyDashboard() {
   await expect(this.page).toHaveURL(/.*dashboard|home/i);
   }

 }










