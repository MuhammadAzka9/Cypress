import loginElement from '../../support/loginElement'
const userDataLogin = require('../../fixtures/userDataLogin.json')

describe('Login', () => {
    it('Berhasil login', () => {
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.get(loginElement.Uname).type(userDataLogin.inputUname)
      cy.get(loginElement.pass).type(userDataLogin.inputPass)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.wait(500)
      cy.get('.home-main > .content > .title').should('contain.text', 'Get fit and look fab in new seasonal styles')
    })

    it('Login dengan email yang tidak terdaftar', () => {
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.get(loginElement.Uname).type(userDataLogin.inputFalsename)
      cy.get(loginElement.pass).type(userDataLogin.inputPass)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.get('.message-error').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })

})