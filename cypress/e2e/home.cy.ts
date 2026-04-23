describe('Home Page', () => {
  it('page loads successfully', () => {
    cy.visit('/')
    cy.url().should('include', 'manuelaklenke.com')
    cy.title().should('not.be.empty')
  })

  it('main content area is visible', () => {
    cy.visit('/')
    cy.get('#main').should('be.visible')
  })
})
