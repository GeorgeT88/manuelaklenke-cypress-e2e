describe('About Page', () => {
  it('page loads successfully', () => {
    cy.visit('/about')
    cy.get('nav').should('be.visible')
  })
})
