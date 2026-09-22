

 import { test, expect } from '@playwright/test';
import { SignupPage } from '../Pages/signUpPage';
import { LoginPage } from '../Pages/loginPage';

 test('Verify Signup page', async ({ page }) => {

   const signupPage = new SignupPage(page);

   // Navigate to signup page
   await signupPage.navigateToSignup();

  // Verify signup page
  await signupPage.verifySignupPage();

//   // Verify first name field
 await signupPage.verifyFirstNameField();

//   // Enter first name
await signupPage.enterFirstName('Nandini');

//   // Verify last name field
   await signupPage.verifylastNameField();

//   // Enter last name
  await signupPage.enterLastName('Sharma');
  

  await (signupPage as any).enterEmail?.('nandini.sharma@gmail.com');
  

   await (signupPage as any).enterPassword?.('password123');

//   // Verify signup button
  await signupPage.verifyCreateButton();

//   // Click signup
  await signupPage.clickCreate();
  

    console.log('Signup page test completed successfully');
 });




