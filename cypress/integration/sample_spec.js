describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').should('have.attr', 'placeholder', 'Habit').type('Coding')
    cy.contains('Add').click()
  })
})