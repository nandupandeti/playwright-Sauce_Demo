import { test, expect } from '@playwright/test';
import { SignupPage } from '../Pages/signUpPage';
import { LoginPage } from '../Pages/loginPage';
//import { testData } from '../test-data/testData';



test.describe('Login Tests', () => {

    test('Verify login page', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.verifyLoginPage();
    });


    test('Login with valid credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            'john@gmail.com',
            'password123'
        );

        // Verify that login was successful.
 await page.locator("input[value='Sign In']").click();
 await page.waitForTimeout(2000);
 console.log('login successful');// Wait for 2 seconds to allow the page to load
    });
    test('Login with invalid credentials', async ({ page }) => {
        const  loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.invalidLogin( 'wrong@gmail.com', 'wrongpassword' );
         await page.locator("input[value='Sign In']").click();
 await page.waitForTimeout(2000);

       
    
        
        
    });


     test('Verify forgot password option', async ({ page }) => {

         const loginPage = new LoginPage(page);

        await loginPage.goto();

    //     await loginPage.clickForgotPassword();
    await page.locator('a:has-text("Forgot your password?")').click();
    await page.locator('#recover-email:visible')
    await page.locator('input.button')
    await page.waitForTimeout(2000);
        
        

     });   

});
