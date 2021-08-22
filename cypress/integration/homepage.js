describe("renders the home page", () => {

    it("renders correctly", () => {
        cy.visit("/")
        cy.get('.app-background')
    })
    it("renders correctly", () => {
        cy.get('#header-text').should('have.text', 'Spider Solitare')
    })
    it("renders correctly", () => {
        cy.get('.makeStyles-appBar-1').should('have.css', 'position').and('match', /fixed/)
    })
    it("renders correctly", () => {
        cy.get('#restart-game-button').should('have.attr', 'disabled')
    })

    it("renders correctly", () => {
        cy.get('#restart-game-button').should('have.attr', 'disabled')
    })
    it("renders correctly", () => {
        cy.get('#new-game-button').should('have.text', 'New Game')
    })
    it("renders correctly", () => {
        cy.get('#new-game-button').should('have.text', 'New Game')
    })
    it("renders correctly", () => {
        cy.get('.makeStyles-newDeck-6').should('have.css', 'display').and('match', /flex/)
    })
    it("renders correctly", () => {
        cy.get('[alt="closedCard"]').should('be.visible')
    })

})