describe('Header Testing', () => {
    it('check headers for each of the element', () => {
        cy.visit('auth/register');
        cy.get('#title').should('contain', 'Register'); 
        cy.get('[for="input-name"]').should('contain', 'Full name'); 
        cy.get('[for="input-email"]').should('contain', 'Email address');
        cy.get('[for="input-password"]').should('contain', 'Password');
        cy.get('[for="input-re-password"]').should('contain', 'Repeat password');
        cy.get('[class="text"]').should('contain', 'Agree to');
        cy.get('.facebook.with-icon').should('have.attr', 'href', 'https://www.facebook.com/akveo/');
        cy.get('.github.with-icon').should('have.attr', 'href', 'https://github.com/akveo/nebular');
        cy.get('.twitter.with-icon').should('have.attr', 'href', 'https://twitter.com/akveo_inc');

    })
} )