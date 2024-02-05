import loginElement from '../../support/loginElement'
const userDataLogin = require('../../fixtures/userDataLogin.json')

describe('Edit Account', () => {
    it('Berhasil edit firstname', () => {
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.get(loginElement.Uname).type(userDataLogin.inputUname)
      cy.get(loginElement.pass).type(userDataLogin.inputPass)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.wait(500)
      cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear().type('pendekar')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-success').should("contain.text", "You saved the account information")
    })
})