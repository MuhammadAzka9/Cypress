describe('Search', () => { 
    it('Search barang tanpa login', () => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('#search').type('jacket{enter}')
        cy.get('.search > .block').should("contain.text", "Jacket, t-shirt, jeans for men, jeans for women,pants")
    })
})