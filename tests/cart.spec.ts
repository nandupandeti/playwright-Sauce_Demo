import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {

    test('Verify empty cart', async ({ page }) => {

        const cartPage = new CartPage(page);

        await cartPage.goto();

        await cartPage.verifyEmptyCart();
    });


    test('Verify cart page loads', async ({ page }) => {

        const cartPage = new CartPage(page);

        await cartPage.goto();

        await expect(page).toHaveURL(/cart/);
    });

});
