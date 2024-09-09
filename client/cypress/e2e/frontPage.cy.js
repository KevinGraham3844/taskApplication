describe('Front Page', () => {
  it('front page can be seen with header and buttons', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Task App')
    cy.contains('button', 'Login')
    cy.contains('button', 'Create New Account')
  })
})