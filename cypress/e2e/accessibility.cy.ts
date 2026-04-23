const publicPages = ['/', '/about', '/portfolio', '/events', '/contact']

describe('Accessibility', () => {
  for (const path of publicPages) {
    it(`skip-to-content link exists on ${path}`, () => {
      cy.visit(path)
      cy.get('a').contains(/skip/i).should('exist')
    })

    it(`page has exactly one h1 on ${path}`, () => {
      cy.visit(path)
      cy.get('h1').should('have.length', 1)
    })

    it(`all images have alt text on ${path}`, () => {
      cy.visit(path)
      cy.get('img:not([alt])').should('not.exist')
    })
  }
})
