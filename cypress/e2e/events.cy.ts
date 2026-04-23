describe('Events Page', () => {
  it('page loads successfully', () => {
    cy.visit('/events')
    cy.get('nav').should('be.visible')
  })
})
