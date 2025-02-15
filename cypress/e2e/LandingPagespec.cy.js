describe('Landing Page', () => {
  it('lands on the landing page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.landing-page')
    cy.get('.landing-page-title')
    cy.get('.landing-page-button-title')
    cy.get('.landing-page-getstarted-button')
    cy.get('.landing-page-login-button')
  })
})