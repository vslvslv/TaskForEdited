class NavigationPage {
    general = {
        homeBtn: () => cy.get('[data-testid="header.menuItem.home"]').should('be.visible')

    }

    profile = {
        bagBtn: () => cy.get('[data-testid="header.userMenu.bolsa_any"]')
    }
}

export default NavigationPage;