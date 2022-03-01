/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  // it('Clicking Add button shoud add Habit to list', () => {
  //   cy.get('input').should('have.attr', 'placeholder', 'Habit').type('Eating')
  //   cy.contains('Add').click()
  // })

  // it('delete Habit', () => {
  //   cy.get('.habit-delete').first().as('firstBtn')
  //   cy.get('@firstBtn').click()
  // })

  // it('increase Habit', () => {
  //   cy.get('.habit-increase').each(($el, index, $list) => {
  //     console.log($el, index, $list)
  //     $el.click()
  //   })
  // })

  // it('decrease Habit', () => {
  //   cy.get('.habit-increase').each(($el, index, $list) => {
  //     console.log($el, index, $list)
  //     $el.click()
  //   })
  //   cy.get('.habit-decrease').first().click()
  // })

  // it('reset All Habits', () => {
  //   cy.get('.habit-increase').each(($el, index, $list) => {
  //     console.log($el, index, $list)
  //     $el.click()
  //   })
  //   cy.get('.habits-reset').click()
  // })

   // => Testing Library 사용으로 변경
   it('render', () => {
     cy.findByText('Habit Tracker').should('exist');
   })

   it('Clicking Add button shoud add Habit to list', () => {
    cy.findByPlaceholderText('Habit').type('Eating')
    cy.findByText('Add').click()
  })

  it('delete Habit', () => {
    cy.findAllByTitle('deleteBtn').first().as('firstBtn')
    cy.get('@firstBtn').click()
  })

  it('increase Habit', () => {
    cy.findAllByTitle('increseBtn').each(($el, index, $list) => {
      console.log($el, index, $list)
      $el.click()
    })
  })

  it('decrease Habit', () => {
    cy.findAllByTitle('increseBtn').each(($el, index, $list) => {
      console.log($el, index, $list)
      $el.click()
    })
    cy.findAllByTitle('decreseBtn').first().click()
  })

  it('reset All Habits', () => {
    cy.findAllByTitle('increseBtn').each(($el, index, $list) => {
      console.log($el, index, $list)
      $el.click()
    })
    cy.findByText('Reset All').click()
  })
})