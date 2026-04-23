describe('Portfolio Page', () => {
  it('page loads successfully', () => {
    cy.visit('/portfolio')
    cy.get('nav').should('be.visible')
  })
})
