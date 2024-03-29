// Nama file: register.cy.js

import registerElement from '../../support/registerElement'
const userDataRegister = require('../../fixtures/userDataRegister.json')

describe('Register', () => {
  it('Register with valid user', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains('Create an Account').click()
    cy.get(registerElement.Fname).type(userDataRegister.inputFname)
    cy.get(registerElement.Lname).type(userDataRegister.inputLname)
    cy.get(registerElement.email).type(randomEmail)
    cy.get(registerElement.Pass).type(userDataRegister.inputPass)
    cy.get (registerElement.PassConfirm).type(userDataRegister.inputPass)
    cy.get('button.action.submit.primary').click()
    cy.url('https://magento.softwaretestingboard.com/customer/account/').should('contain', '/customer/account')
   })
  })
  it('Register without first name', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get(registerElement.Lname).type(userDataRegister.inputLname)
    cy.get(registerElement.email).type(randomEmail)
    cy.get(registerElement.Pass).type(userDataRegister.inputPass)
    cy.get (registerElement.PassConfirm).type(userDataRegister.inputPass)
    cy.get('button.action.submit.primary').click()
    cy.get('#firstname-error').should('have.text', userDataRegister.mandatoryField)
   })
  })
  it('Register without last name', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get(registerElement.Fname).type(userDataRegister.inputFname)
    cy.get(registerElement.email).type(randomEmail)
    cy.get(registerElement.Pass).type(userDataRegister.inputPass)
    cy.get (registerElement.PassConfirm).type(userDataRegister.inputPass)
    cy.get('button.action.submit.primary').click()
    cy.get('#lastname-error').should('have.text', userDataRegister.mandatoryField)
   })
  })
  it('Register without email', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get(registerElement.Fname).type(userDataRegister.inputFname)
    cy.get(registerElement.Lname).type(userDataRegister.inputLname)
    cy.get(registerElement.Pass).type(userDataRegister.inputPass)
    cy.get (registerElement.PassConfirm).type(userDataRegister.inputPass)
    cy.get('button.action.submit.primary').click()
    cy.get('#email_address-error').should('have.text', userDataRegister.mandatoryField)
   })
  })
  it('Register without password & confirm password', () => {
    cy.generateRandomEmail().then((randomEmail) => {
    cy.visit('https://magento.softwaretestingboard.com/'),
    cy.contains('Create an Account').click()
    cy.get(registerElement.Fname).type(userDataRegister.inputFname)
    cy.get(registerElement.Lname).type(userDataRegister.inputLname)
    cy.get(registerElement.email).type(randomEmail)
    cy.get('button.action.submit.primary').click()
    cy.get('#password-error').should('have.text', userDataRegister.mandatoryField)
    cy.get('#password-confirmation-error').should('have.text', userDataRegister.mandatoryField)  
   })
  })
})