import { Page, Locator, expect } from '@playwright/test';

export class HomePage {

    readonly page: Page;

    readonly logo: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;

    readonly catalogLink: Locator;
    readonly aboutUsLink: Locator;
    readonly loginLink: Locator;
    readonly signupLink: Locator;
    readonly wishlistLink: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.logo = page.locator('header');

        this.searchBox = page.locator(
            'input[name="q"], input[type="search"]'
        );

        this.searchButton = page.getByRole('link', {
            name: 'Search'
        });

        this.catalogLink = page.getByRole('link', {
            name: 'Catalog'
        });

        this.aboutUsLink = page.getByRole('link', {
            name: 'About Us'
        });

        this.loginLink = page.getByRole('link', {
            name: 'Login'
        });

        this.signupLink = page.getByRole('link', {
            name: 'Create account'
        });

        this.wishlistLink = page.getByRole('link', {
            name: 'Wish list'
        });

        this.cartLink = page.getByRole('link', {
            name: /My Cart/
        });
    }

    async goto(): Promise<void> {
        await this.page.goto('https://sauce-demo.myshopify.com/');
    }

    async verifyHomePage(): Promise<void> {

        await expect(this.page).toHaveTitle(/Sauce Demo/i);

        await expect(
            this.page.getByText(
                'Just a demo site showing off what Sauce can do.'
            )
        ).toBeVisible();
    }

    async clickLogin(): Promise<void> {
       // await this.loginLink.click();
    await this.page.getByRole('link', { name: /Log In/i }).click();
    }

    async clickSignup(): Promise<void> {
       // await this.signupLink.click();
        await this.page.getByRole('link', { name: /Sign up/i }).click();
    }

    async clickCatalog(): Promise<void> {
       // await this.catalogLink.click();
        await this.page.getByRole('link', { name: /Catalog/i }).click();
    }

    async clickWishlist(): Promise<void> {
       // await this.wishlistLink.click();
       await this.page.getByRole('link', { name: /Wish list/i }).click();
    }

    async clickCart(): Promise<void> {
       // await this.cartLink.first().click();
       await this.page.getByRole('link', { name: /My Cart/i }).first().click();
    }
}

