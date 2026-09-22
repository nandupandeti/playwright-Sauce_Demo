import { test, expect } from '@playwright/test';

test.describe('Search Tests', () => {
  test('Search for existing product', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/search?type=product&q=shirts');

    const searchBox = page.locator('input[name="q"], input[type="search"]'); 

    await searchBox.fill('Grey jacket');
    await searchBox.press('Enter');

    
    await page.getByRole('img', { name: /Grey jacket/i }).click();
  });

  test('Search for non-existing product', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/search?type=product&q=shirts');

    const searchBox = page.locator('input[name="q"], input[type="search"]');
      
     await searchBox.fill('ProductDoesNotExist123');
    await searchBox.press('Enter');

    await expect(page).toHaveURL(/search/);
  });
});


