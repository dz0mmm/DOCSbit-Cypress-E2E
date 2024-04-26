describe('Loading tests of the "Knowledgebase" subpage in the DOCSbit system', () => {
    beforeEach(() => {
        cy.visit("/knowledge");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/knowledge").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/knowledge");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - The best tool to spread knowledge");
    });
});