describe('Second Test', () => {

    it('Check the page', () => {
        cy.visit('http://localhost:4200/pages/modal-overlays/dialog');
        cy.get('.result-from-dialog').last().click();
        cy.contains('Return Result From Dialog').parent().find('[class="appearance-filled size-medium status-primary shape-rectangle transitions"]').click();
        cy.contains("Enter your name", {matchCase: false});
        cy.contains("Name", {matchCase: false});
        cy.contains("Cancel", {matchCase: false});
        cy.contains("Submit", {matchCase: false});
    });
    });