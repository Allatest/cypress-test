describe('Stepper', () => {

    it('Check the page', () => {
        cy.visit('http://localhost:4200/pages/layout/stepper');
        cy.contains("Step content #1");
        cy.contains("next").click();
        cy.contains("Step content #2");
        cy.contains("next").click();
        cy.contains("Step content #3");
        cy.contains("next").click();
        cy.contains("Step content #4");
      });

    });      
      