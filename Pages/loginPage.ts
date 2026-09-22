
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signIn: Locator;
    readonly submitButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly errormessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.emailInput = page.locator('#customer_email');

        this.passwordInput = page.locator( '#customer_password' );

        this.signIn = page.locator( 'input[value="Sign In"]' );
        this.submitButton = page.locator( 'input[value="Submit"]' );
        

        this.forgotPasswordLink = page.getByText( 'Forgot your password?' );
        this.errormessage = page.getByText( 'Invalid email or password.' );
    }

    async goto(): Promise<void> {

        await this.page.goto('https://sauce-demo.myshopify.com/account/login', {
            waitUntil: 'domcontentloaded'
        });
    }

    async verifyLoginPage(): Promise<void> {

        await expect( this.page.getByRole('heading', 
            {
            name: /Customer Login/i
            })
        ).toBeVisible();

        await expect(this.emailInput).toBeVisible();

        await expect(this.passwordInput).toBeVisible();
    }

    async login( email: string, password: string): Promise<void> 
    {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.signIn.click();
    }

    async invalidLogin( email: string, password: string ): Promise<void> 
    {
       await this.emailInput.fill(email);
       await this.passwordInput.fill(password);
        await this.signIn.click();
        console.log('Invalid login test completed successfully');
    }
    

    async clickForgotPassword(): Promise<void> {
        await this.submitButton.click();

       // await this.forgotPasswordLink.click();
        

    }
}


