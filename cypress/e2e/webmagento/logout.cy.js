import loginElement from '../../support/loginElement'
const userDataLogin = require('../../fixtures/userDataLogin.json')

describe('Logout', () => {
    it('Berhasil Logout', () => {
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.get(loginElement.Uname).type(userDataLogin.inputUname)
      cy.get(loginElement.pass).type(userDataLogin.inputPass)
      cy.get('#send2').click()
      cy.wait(500)
      cy.get('.home-main > .content > .title').should('contain.text', 'Get fit and look fab in new seasonal styles')
      cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()
      cy.get('.base').should('contain.text', 'You are signed out')
    })
})