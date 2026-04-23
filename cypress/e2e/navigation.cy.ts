describe('Navigation', () => {
  it('navbar is visible on home page', () => {
    cy.visit('/')
    cy.get('nav').should('be.visible')
  })

  it('footer is visible on home page', () => {
    cy.visit('/')
    cy.get('footer').should('be.visible')
  })

  it('can navigate to About page via navbar', () => {
    cy.visit('/')
    cy.get('nav').contains(/about me/i).first().click()
    cy.url().should('include', '/about')
  })

  it('can navigate to Portfolio page via navbar', () => {
    cy.visit('/')
    cy.get('nav').contains(/translated books/i).first().click()
    cy.url().should('include', '/portfolio')
  })

  it('can navigate to Events page via navbar', () => {
    cy.visit('/')
    cy.get('nav').contains(/events/i).first().click()
    cy.url().should('include', '/events')
  })

  it('can navigate to Contact page via navbar', () => {
    cy.visit('/')
    cy.get('nav').contains(/contact/i).first().click()
    cy.url().should('include', '/contact')
  })

  it('404 page is shown for unknown routes', () => {
    cy.visit('/this-page-does-not-exist')
    cy.get('nav').should('be.visible')
  })
})
