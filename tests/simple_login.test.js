import { test, expect, Page } from '@playwright/test';
import DashboardPageActions from '../src/actions/dashboard.actions';
import SignInPageActions from '../src/actions/sign_in.actions'

let dashboardActions 
let signInActions 
test.beforeEach(async ({ page }) => {

dashboardActions= new DashboardPageActions(page)
signInActions = new SignInPageActions(page)

});

test.describe('Demo Test', () => {

    test.skip('Verify Login Error Message', async ({ page }) => {
      await page.goto('https://www.browserstack.com/');
        await page.waitForSelector('text=Sign in',{state:'visible'});

        await page.locator('text=Sign in').first().click();

        await page.waitForSelector('#user_email_login')

        await page.locator('#user_email_login').type('example1@example.com');

        await page.locator('#user_password').type('examplepassword');

        await page.locator('#user_submit').click();

        const errorMessage = await (await page.locator("//input[@id='user_password']/../div[@class='error-msg']").textContent()).trim();

        console.log("Browserstack Login Error Message: "+errorMessage);

        expect(errorMessage).toBe('Invalid password');

    });

    test('Verify Login Error Message as Page Object', async ({ page }) => {
      await dashboardActions.goTo('https://www.browserstack.com/')
      await dashboardActions.signIn()
      await signInActions.signInAs('example1@example.com','examplepassword')
      const errorMessage= await signInActions.getErrorMessage()
      expect(errorMessage).toBe('Invalid password');

  });

});