describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  it('contact form and all fields are visible', () => {
    cy.get('[data-testid="contact-form"]').should('be.visible')
    cy.get('[data-testid="contact-name"]').should('be.visible')
    cy.get('[data-testid="contact-email"]').should('be.visible')
    cy.get('[data-testid="contact-message"]').should('be.visible')
    cy.get('[data-testid="contact-submit"]').should('be.visible')
  })

  it('submit does nothing when form is empty', () => {
    cy.get('[data-testid="contact-submit"]').click()
    cy.url().should('include', '/contact')
  })

  it('submit button becomes enabled when all required fields are filled', () => {
    cy.get('[data-testid="contact-name"]').type('Test User')
    cy.get('[data-testid="contact-email"]').type('test@example.com')
    cy.get('[data-testid="contact-message"]').type('Hello, this is a test message.')
    cy.get('[data-testid="contact-submit"]').should('be.enabled')
  })

  it('email field rejects invalid format', () => {
    cy.get('[data-testid="contact-name"]').type('Test User')
    cy.get('[data-testid="contact-email"]').type('not-an-email')
    cy.get('[data-testid="contact-message"]').type('Test message')
    cy.get('[data-testid="contact-submit"]').click()
    cy.url().should('include', '/contact')
  })
})
