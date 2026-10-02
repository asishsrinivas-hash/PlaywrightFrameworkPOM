import {Page} from "@playwright/test";
import {productpageLocators} from "../locators/productLocators";

export class ProductPage{

    constructor(private page:Page){}

    async logout(){
        await this.page.locator(productpageLocators.burgerIcon).click();
        await this.page.locator(productpageLocators.logoutLink).click();
    }

    async about(){
        await this.page.locator(productpageLocators.burgerIcon).click();
        await this.page.locator(productpageLocators.aboutLink).click();
    }
}