describe("renders the main page", () => {
    it("renders correctly", () => {
        cy.visit("/")
    })
    it("shows how to play component", () => {
        cy.get('#transition-modal-description-first-rule').should('have.text', 'You cannot drag an item unless it is the last element or it is in an ordered card list.')
    })
    it("clicks lets play button", () => {
        cy.get('#lets-play-button').should('have.text', 'Let\'s Play')
    })
    it("clicks lets play button", () => {
        cy.get('#lets-play-button').click()
    })
    it("renders correctly myApp", () => {
        cy.get('#myApp')
    })
    it("gets spider solitare header text", () => {
        cy.get('#header-text').should('have.text', 'Spider Solitare')
    })
    it("gets undo button disabled attribute", () => {
        cy.get('#undo-move-button').should('have.attr', 'disabled')
    })
    it("gets button text", () => {
        cy.get('#new-game-button').should('have.text', 'New Game')
    })
    it("clicks new game button", () => {
        cy.get('#new-game-button').click()
    })
    it("gets img by alt attribute", () => {
        cy.get('[alt="closedCard"]').should('be.visible')
    })

})