class GreetingsPage {
    
    locators = {
        acceptCookiesBtn: () => cy.get('#onetrust-accept-btn-handler'),
        englishLanguageBtn: () => cy.get('#lang_BG > .phForm__lang > .phForm__langBtn2')
    }

}

export default GreetingsPage;