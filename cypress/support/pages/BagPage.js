class BagPage {

    products = {
        amount: () => cy.get('[data-testid="bag.item.info"] > :nth-child(2)'),
        weight: () => cy.get('[data-testid="bag.item.info"] > :nth-child(3)'),
        color: () => cy.get('[data-testid="bag.item.info"] > :nth-child(4)')
    }
}

export default BagPage;