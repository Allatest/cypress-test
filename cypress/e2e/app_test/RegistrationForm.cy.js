describe('Registration Form', () => {
    it('Fill in Registration form', () => {
      cy.visit('auth/register');
      let selector = ['#input-name', '#input-email', '#input-password', '#input-re-password'];
      let typeText = ['Alla', 'a@gmail.com', '12345', '12345'];
      
      cy.get('.form-control-group').each(($div, index) => {
      cy.wrap($div).within(() => {
       cy.get(selector[index]).type(typeText[index]);
  
      cy.get('[type="checkbox"]').check({ force: true });

      cy.get('.appearance-filled.full-width.size-large.status-primary.shape-rectangle.transitions').click();
      
        cy.get('#input-name').should('have.value', 'Alla');
         cy.get('#input-email').should('have.value', "a@gmail.com");
         cy.get('#input-password').should('have.value', '12345');
        cy.get('[type="checkbox"]').should('be.checked');
        });
      });
      
    });
  });
  
  