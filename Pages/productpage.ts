import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {

    readonly page: Page;

    readonly productTitle: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productTitle = page.locator(
            'h1'
        );

        this.addToCartButton = page.getByRole(
            'button',
            {
                name: /add to cart/i
            }
        );
    }

    async openProduct(
        productName: string
    ): Promise<void> {

        await this.page.getByText(
            productName,
            { exact: true }
        ).click();
    }

    async verifyProduct(
        productName: string
    ): Promise<void> {

        await expect(
            this.productTitle
        ).toContainText(productName);
    }

    async addToCart(): Promise<void> {

        await this.addToCartButton.click();
        await this.page.getByRole('link', { name: 'My Cart (0)' }).click();
        await this.addToCartButton.click();
    }
}
