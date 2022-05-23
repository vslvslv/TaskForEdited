class ProductDetailsPage {

    details = {
        addToBagBtn: () => cy.get('#addCartContainer > #productFormAdd').should('be.visible').should('be.enabled'),
        amount: () => cy.get('[data-testid="bag.item.info"] > :nth-child(2)'),
        weight: () => cy.get('[data-testid="bag.item.info"] > :nth-child(3)'),
        color: () => cy.get('[data-testid="bag.item.info"] > :nth-child(4)')
    }
}

export default ProductDetailsPage;