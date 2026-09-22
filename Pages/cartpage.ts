import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    readonly page: Page;

    readonly checkoutButton: Locator;

    constructor(page: Page) {

        this.page = page;
        
        this.checkoutButton = page.getByRole('link', { name: 'My Cart (0)' });
           
    }

    async goto(): Promise<void> {

        await this.page.goto('https://sauce-demo.myshopify.com/cart#');
    }

    async verifyEmptyCart(): Promise<void> {

        await expect(
            this.page.getByRole('link', { name: 'My Cart (0)' }))
        .toBeVisible();
    }
   

    async clickCheckout(): Promise<void> {

        await this.checkoutButton.click();
    }
}