describe('Login Page', () => {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  }) 
  it('page appears after clicking login', () => {
    
    cy.contains('Login').click()
    cy.contains('Username')
    cy.contains('Password')
  })

  it('logging in with correct credentials takes you to main page', () => {
    cy.contains('Login').click()
    cy.get('#username').type('cghahremani')
    cy.get('#password').type('test384')

    cy.contains('Sign in').click()
    cy.contains('welcome!')
  })
})