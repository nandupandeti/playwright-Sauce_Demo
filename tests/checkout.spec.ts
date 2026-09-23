
import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../Pages/checkoutpage';

test.describe('Checkout Tests', () => {

    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {

        checkoutPage = new CheckoutPage(page);

        
        await page.goto('https://sauce-demo.myshopify.com/checkouts/');

    });

    
    test('TC01 - Verify Checkout Page', async () => {
    await checkoutPage.verifyCheckoutPage();
    });

    
    test('TC02 - Verify Email Field', async ({ page }) => {
      page.getByRole('textbox', { name: /Email/i })
      });

    test('TC03- verify country field' , async({page}) => {
        page.getByRole('combobox', { name: /Country\/Region/i })
    })
    test('TC04 - Verify First Name Field', async ({page}) => {
      page.getByLabel('First name (optional)')
     });

    
    test('TC05 - Verify Last Name Field', async ({page}) => {
     
     page.getByLabel('Last name (optional)')
      });

    
    test('TC06 - Verify Address Field', async ({page}) => {
     
      page.getByRole('combobox', { name: /Address/i })
       await page.getByPlaceholder('City', { exact: true })
       await page.getByRole('combobox', { name: /State/i })
       await page.getByRole('textbox', { name: /PIN code/i })

    });

    
test('TC07 - Verify Credit Card Payment Option', async () => {

    await expect(checkoutPage.creditCardOption ).toBeVisible();

});

// TC08 - Select Credit Card
test('TC09 - Select Credit Card', async () => {

    await checkoutPage.selectCreditCard();

});

// TC9 - Verify Card Number Field
test('TC10 - Verify Card Number Field', async ({page}) => {

    await checkoutPage.selectCreditCard();
    await page.getByRole('textbox', { name: 'PIN code' })

    await expect( checkoutPage.cardNumber ).toBeVisible();

});

// TC11 - Verify Expiry Date Field
test('TC11 - Verify Expiry Date Field', async () => {

    await checkoutPage.selectCreditCard();
    await page.locator('label:has-text("Expiration date (MM / YY)")')

    await expect( checkoutPage.expiryDate).toBeVisible();

});

// TC12 - Verify Security Code Field
test('TC12 - Verify Security Code Field', async () => {

    await checkoutPage.selectCreditCard();

    await expect( checkoutPage.securityCode ).toBeVisible();

});

// TC13 - Enter Payment Details
test('TC13 - Enter Payment Details', async () => {

    await checkoutPage.selectCreditCard();

    await checkoutPage.enterPaymentDetails(
        '4111111111111111',
        '12/30',
        '123',
        'Test User'
    );

});

    

});


