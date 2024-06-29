describe('Loading tests of the "Features Database Assets" subpage in the DOCSbit system', () => {
    beforeEach(() => {
        cy.visit("/feature/database");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/feature/database").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/feature/database");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - Database");
    });
});
