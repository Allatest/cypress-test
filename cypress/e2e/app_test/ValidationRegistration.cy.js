describe('Validation Testing', () => {
    it('check validation error message', () => {
        cy.visit('auth/register');
        cy.get('#input-name').type('aa');
        cy.get('body').click();
        cy.get('[class="caption status-danger"]').should('be.visible').and('contain', ' Full name should contains from 4 to 50 characters ');
        cy.get('#input-email').type('g');
        cy.get('body').click();
        cy.get('[class="caption status-danger"]').should('be.visible').and('contain', 'Email should be the real one!');
    })
})