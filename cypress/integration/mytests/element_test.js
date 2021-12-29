describe('launch my website',()=>{
    it('app testing',()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Careers')
        cy.contains('Careers').click()
        cy.url().should('include', '/life-at-freshworks')
    })
})