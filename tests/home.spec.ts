import { test } from '@playwright/test';
import { HomePage } from '../Pages/homepage';

test.describe('Home Page Tests', () => {

    test('Verify home page', async ({ page }) => {

        const homePage = new HomePage(page);

        await homePage.goto();

        await homePage.verifyHomePage();
    });


    test('Verify navigation links', async ({ page }) => {

        const homePage = new HomePage(page);

        await homePage.goto();

        await homePage.catalogLink.isVisible();

       // await homePage.aboutUsLink.isVisible();

        await homePage.loginLink.isVisible();

        await homePage.signupLink.isVisible();

        await homePage.wishlistLink.isVisible();
    });


    test('Navigate to login page', async ({ page }) => {

        const homePage = new HomePage(page);

        await homePage.goto();

        await homePage.clickLogin();

        await page.waitForURL(/account\/login/);
    });


    test('Navigate to create account', async ({ page }) => {

        const homePage = new HomePage(page);

        await homePage.goto();

        await homePage.clickSignup();

        await page.waitForURL(/account\/register/);
    });

});
