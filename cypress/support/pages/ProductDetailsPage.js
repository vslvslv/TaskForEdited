class ProductDetailsPage {

    details = {
        price: () => cy.get('.product-sale'),
        color: () => cy.get('.colors-info-name'),
        size: () => cy.get('.single-size'),
        addToBagBtn: () => cy.get('#addCartContainer > #productFormAdd').should('be.visible').should('be.enabled'),
    }

    waitForPageToFinishLoading() {
        cy.intercept('/services/shoppingBags/1/summary').as('shoppingBag')
        cy.wait('@shoppingBag')
    }
}

export default ProductDetailsPage;