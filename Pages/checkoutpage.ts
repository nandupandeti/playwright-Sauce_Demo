import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;

    readonly email: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly postalCode: Locator;

    constructor(page: Page) {

        this.page = page;

        this.email = page.locator(
            'input[type="email"]'
        );

        this.firstName = page.locator(
            'input[name*="firstName"]'
        );

        this.lastName = page.locator(
            'input[name*="lastName"]'
        );

        this.address = page.locator(
            'input[name*="address"]'
        );

        this.city = page.locator(
            'input[name*="city"]'
        );

        this.postalCode = page.locator(
            'input[name*="postalCode"]'
        );
    }

    async verifyCheckoutPage(): Promise<void> {

        await expect(this.page).toHaveURL(/checkouts?/i);
    }
}
