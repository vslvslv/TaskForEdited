/// <reference types ='cypress' />

import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import GreetingsPage from "../pages/GreetingsPage";
import NavigationPage from "../pages/NavigationPage";
import ProcutsHomePage from "../pages/ProcutsHomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const greetings = new GreetingsPage(),
        navigation = new NavigationPage(),
        products = new ProcutsHomePage(),
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

Then('the following item info should be displayed', (table) => {
      let productDetails = table.rowsHash()
      product.details.amount().should('have.text', productDetails.Amount)
      product.details.weight().should('have.text', productDetails.Weight)
      product.details.color().should('have.text', productDetails.Color)
})