class ProcutsHomePage {
    items = {
        mandarinBasel: () => cy.get('#product-key-id-27076325')
    }

    selectItem(product) {
        switch (product) {
            case "Scented candle Mandarin Basil":
                return this.items.mandarinBasel();
        
            default:
                cy.missingOptionMsg(product);
                break;
        }
    }
}

export default ProcutsHomePage;