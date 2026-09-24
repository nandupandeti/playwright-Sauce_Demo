
import { test, expect } from '@playwright/test';
import { SignupPage } from '../Pages/signUpPage';

test.describe('Signup Test Scenarios', () => {

    let signupPage: SignupPage;

    test.beforeEach(async ({ page }) => {

        signupPage = new SignupPage(page);

        
        await page.goto('https://sauce-demo.myshopify.com/account/register');

        
        await expect(page.locator('text=Sign Up')).toBeVisible();
    });


    test('TC01 - Verify Signup Page', async () => {

       // await expect(signupPage.signupHeading).toBeVisible();
        await expect(signupPage.firstNameInput).toBeVisible();
        await expect(signupPage.lastNameInput).toBeVisible();
        await expect(signupPage.emailInput).toBeVisible();
        await expect(signupPage.passwordInput).toBeVisible();
        await expect(signupPage.createButton).toBeVisible();
    });


    test('TC02 - Signup with valid details', async () => {

        await signupPage.enterFirstName('John');
        await signupPage.enterLastName('Smith');
        await signupPage.enterEmail('john' + Date.now() + '@gmail.com');
        await signupPage.enterPassword('Test@12345');

        await signupPage.clickCreateAccount();

        
    });


    test('TC03 - Enter First Name', async () => {

        await signupPage.enterFirstName('John');

        await expect(signupPage.firstNameInput) .toHaveValue('John');
    });


    test('TC04 - Enter Last Name', async () => {

        await signupPage.enterLastName('Smith');

        await expect(signupPage.lastNameInput).toHaveValue('Smith');
    });


    test('TC05 - Enter Email', async () => {

        await signupPage.enterEmail('john@example.com');

        await expect(signupPage.emailInput).toHaveValue('john@example.com');
    });


    test('TC06 - Enter Password', async () => {

        await signupPage.enterPassword('Test@12345');

        await expect(signupPage.passwordInput).toHaveValue('Test@12345');
    });

});

