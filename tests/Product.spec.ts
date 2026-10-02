import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {ProductPage} from '../pages/ProductPage';
import {BASE_URL, USERNAME, PASSWORD} from '../utils/envConfig';
import { LoginLocators } from '../locators/locators';
import {productpageLocators} from "../locators/productLocators";

test.describe('Product Page Tests', () => {

    let loginPage: LoginPage;
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);

        await page.goto(BASE_URL);
        await loginPage.login(USERNAME, PASSWORD);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


    })

    test('Logout from the application', async ({ page }) => {

        await productPage.logout();
        await expect(page.locator(LoginLocators.loginButton)).toBeVisible();
    })

    test('Navigate to About page', async ({ page }) => {

        await productPage.about();
        await expect(page.locator(productpageLocators.bookADemo)).toBeVisible();
        await expect(page.goBack());
    })


})