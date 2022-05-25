/// <reference types ='cypress' />

import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import BagPage from "../pages/BagPage";
import GreetingsPage from "../pages/GreetingsPage";
import NavigationPage from "../pages/NavigationPage";
import ProcutsHomePage from "../pages/ProcutsHomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const greetings = new GreetingsPage(),
        navigation = new NavigationPage(),
        products = new ProcutsHomePage(),
        bag = new BagPage(),
        product = new ProductDetailsPage();

Given('page is loaded', () => {
    cy.visit('https://shop.mango.com/')
})

Given('cookies are accepted', () => {
    greetings.locators.acceptCookiesBtn().click();
})

Given('{string} is selected', (lang) => {
    switch (lang) {
        case "English":
            greetings.locators.englishLanguageBtn().click()            
            break;
    
        default:
            cy.missingOptionMsg(lang);
            break;
    }
})

Given('select {string} from Navigation', (option) => {
    switch (option) {
        case "Home":
            navigation.general.homeBtn().click()
            break;
    
        default:
            cy.missingOptionMsg(option);
            break;
    }
})

Given('select {string} section', (option) => cy.contains(option).click())

When('select {string} product', (product) => products.selectItem(product).invoke('show').click())

When('press Add to shopping cart on Product page', () => {
    product.waitForPageToFinishLoading()
    product.details.addToBagBtn().click()
})

When('press Open Shopping bag button on pop-up dialog', () => cy.get('[data-testid="bag.preview.goToFullpage"]').should('be.enabled').click())

Then('verify product attributes',(table) => {
    let productDetails = table.rowsHash()
    product.details.price().should('have.text', productDetails.Price)
    product.details.color().should('have.text', productDetails.Color)
    product.details.size().should('have.text', productDetails.Size)
})

Then('the following item info should be displayed', (table) => {
      let productDetails = table.rowsHash()
      bag.products.amount().should('have.text', productDetails.Amount)
      bag.products.weight().should('have.text', productDetails.Size)
      bag.products.color().should('have.text', productDetails.Color)
})