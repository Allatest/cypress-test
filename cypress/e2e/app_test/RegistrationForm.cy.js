describe('Registration Form', ()=>{
    it('Fill in Registration form', ()=>{
cy.visit('auth/register');
cy.get('#input-name').type('Alla');
cy.get('#input-email').type("a@gmail.com");
cy.get('#input-password').type("12345");
cy.get('#input-re-password').type('12345');
cy.get('[type="checkbox"]').check({force: true});
cy.get('[class="appearance-filled full-width size-large status-primary shape-rectangle transitions"]').click();
cy.get('[type="checkbox"]').should('be.checked');
cy.get('#input-name').should('have.value', 'Alla');
cy.get('#input-email').should('have.value', 'a@gmail.com');
cy.get('#input-password').should('have.value', '12345');

    })
})