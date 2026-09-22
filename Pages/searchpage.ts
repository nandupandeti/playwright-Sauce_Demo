import { test, expect } from '@playwright/test';

test.describe('Search Tests', () => {

    test('Search for existing product', async ({ page }) => {

        await page.goto('/search');

        const searchBox = page.locator('input[name="q"], input[type="search"]');

        await searchBox.fill('Grey jacket');

        await searchBox.press('Enter');

        await expect( page.getByText('Grey jacket') ).toBeVisible();
    });


    test('Search for non-existing product', async ({ page }) => {

        await page.goto('/search');

        const searchBox = page.locator(
            'input[name="q"], input[type="search"]'
        );

        await searchBox.fill('ProductDoesNotExist123');

        await searchBox.press('Enter');

        await expect(page).toHaveURL(/search/);
    });

});



