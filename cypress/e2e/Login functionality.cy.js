describe('Login functionality', () => {

    it('LogIn', () => {
cy.visit('http://localhost:4200/pages/forms/layouts');
cy.wait(2000);
cy.get('#inputEmail1').type('alla@gmail.com');
cy.get('#inputPassword2').type('12345');
cy.get('.inner-circle').click({ multiple: true });
cy.contains('Using the Grid').parent().find('[class="appearance-filled size-medium status-primary shape-rectangle transitions"]').click();

    });
    
});