describe('Add new row to the table', () => {
    it('Add new row to the table with the help of +', () => {
        cy.visit('/pages/tables/smart-table');
        let initialRowCount;
        cy.get("tbody td").its('length').then((rowCount) => {
            initialRowCount = rowCount;
            cy.get('[class="nb-plus"]').click();
            cy.get('[class="nb-checkmark"]').click();
            cy.wait(5000);
            cy.get("tbody td").its('length');
            cy.get("td").should('have.length', rowCount);
        });
    })
} )