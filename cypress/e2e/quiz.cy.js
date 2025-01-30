describe('Quiz E2E', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should start a quiz and display the first question of the quiz', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });

    it('should answer questions and complete the quiz', () => {
        cy.get('button').contains('Start Quiz').click();

        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }

        cy.get('.alert-success').should('be.visible');
    });

    it('should restart the quiz after completion', () => {
        cy.get('button').contains('Start Quiz').click();

        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }

        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});
