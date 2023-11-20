describe('Edit a cell', () => {
    it('Edit cell', () => {
        cy.visit('/pages/tables/smart-table');
        let initialText;
        cy.get('tbody tr').first().then((firstRow) => {
            cy.get(firstRow).find('td').eq(2).invoke("text");
            cy.get('.nb-edit').each(($button, index) => {
                if (index === 0) {
                    cy.wrap($button).click();
                }
            });
            cy.get('.ng-star-inserted').find('[ng-reflect-model="Mark"]').clear().type('Ben');
            cy.get('.nb-checkmark').click();

            
            

    });
        });
    })
