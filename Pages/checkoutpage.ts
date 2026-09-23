import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;

    readonly email: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly postalCode: Locator;
    readonly creditCardOption: Locator;
    readonly cardNumber: Locator;
    readonly expiryDate: Locator;
    readonly securityCode: Locator;
    readonly cardName: Locator;
    readonly payButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.email = page.locator( 'input[type="email"]' );

        this.firstName = page.locator('input[name*="firstName"]' );

        this.lastName = page.locator('input[name*="lastName"]' );

        this.address = page.locator( 'input[name*="address"]' );

        this.city = page.locator('input[name*="city"]' );

        this.postalCode = page.locator( 'input[name*="postalCode"]' );

        this.creditCardOption = page.getByText(/credit card/i );

        this.cardNumber = page.getByLabel( /card number/i );

        this.expiryDate = page.getByLabel( /expiration date|expiry date/i);

        this.securityCode = page.getByLabel(/security code|cvv/i );

        this.cardName = page.getByLabel(/name on card/i );

        this.payButton = page.getByRole('button',{ name: /pay|complete order|place order/i } );
    }

    async verifyCheckoutPage(): Promise<void> { 
        await expect(this.page)

    }
        async selectCreditCard(): Promise<void> {

        await this.creditCardOption.click();

    }

    async enterPaymentDetails(
        cardNumber: string,
        expiryDate: string,
        securityCode: string,
        cardName: string
    ): Promise<void> {

        await this.cardNumber.fill(cardNumber);

        await this.expiryDate.fill(expiryDate);

        await this.securityCode.fill(securityCode);

        await this.cardName.fill(cardName);

    }

    async clickPay(): Promise<void> {

        await this.payButton.click();

    }
}





    
    
