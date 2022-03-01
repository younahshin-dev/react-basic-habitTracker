describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Clicking Add button shoud add Habit to list', () => {
    cy.get('input').should('have.attr', 'placeholder', 'Habit').type('Eating')
    cy.contains('Add').click()
  })

  it('delete Habit', () => {
    cy.get('.habit-delete').first().as('firstBtn')
    cy.get('@firstBtn').click()
  })

  it('increase Habit', () => {
    cy.get('.habit-increase').each(($el, index, $list) => {
      console.log($el, index, $list)
      $el.click()
    })
  })

  it('decrease Habit', () => {
    cy.get('.habit-increase').each(($el, index, $list) => {
      console.log($el, index, $list)
      $el.click()
    })
    cy.get('.habit-decrease').first().click()
  })

  it('reset All Habits', () => {
    cy.get('.habit-increase').each(($el, index, $list) => {
      console.log($el, index, $list)
      $el.click()
    })
    cy.get('.habits-reset').click()
  })
})