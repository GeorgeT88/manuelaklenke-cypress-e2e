describe('Language Switcher', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('language switcher button is visible in the navbar', () => {
    cy.get('nav button[aria-haspopup="true"]:visible').first().should('be.visible')
  })

  it('language dropdown offers three language options', () => {
    cy.get('nav button[aria-haspopup="true"]:visible').first().click()
    cy.get('[role="menuitem"]').contains('English').should('be.visible')
    cy.get('[role="menuitem"]').contains('Romana').should('be.visible')
    cy.get('[role="menuitem"]').contains('Deutsch').should('be.visible')
  })

  it('switching to English updates the navbar language button', () => {
    cy.get('nav button[aria-haspopup="true"]:visible').first().click()
    cy.get('[role="menuitem"]').contains('English').click()
    cy.get('nav button[aria-haspopup="true"]:visible').first().should('contain.text', 'EN')
  })

  it('switching to Deutsch updates the navbar language button', () => {
    cy.get('nav button[aria-haspopup="true"]:visible').first().click()
    cy.get('[role="menuitem"]').contains('Deutsch').click()
    cy.get('nav button[aria-haspopup="true"]:visible').first().should('contain.text', 'DE')
  })
})
