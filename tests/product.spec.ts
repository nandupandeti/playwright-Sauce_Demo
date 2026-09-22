import { test, expect } from '@playwright/test';

test.describe('Product Tests', () => {

    test('Verify product is displayed', async ({ page }) => {

        await page.goto('https://sauce-demo.myshopify.com/collections/all');

        await expect(
            page.getByText('Grey jacket')
        ).toBeVisible();

        await expect(
            page.getByText('Noir jacket')
        ).toBeVisible();

        await expect(
            page.getByText('Striped top')
        ).toBeVisible();
    });


    test('Open Grey jacket product', async ({ page }) => {

        await page.goto('https://sauce-demo.myshopify.com/search?type=product&q=grey+colour+shirts');

        await page.getByRole('button').click();

        //await expect( page.locator('h1') ).toContainText('Grey jacket');
        //await expect( page.getByRole('button', { name: /add to cart/i }) ).toBeVisible();
    });
    test('Verify sold out product', async ({ page }) => {

        await page.goto('https://sauce-demo.myshopify.com/collections/all');

        await expect(
            page.getByText('Sold Out Brown Shades')
        ).toBeVisible();
    });

});
