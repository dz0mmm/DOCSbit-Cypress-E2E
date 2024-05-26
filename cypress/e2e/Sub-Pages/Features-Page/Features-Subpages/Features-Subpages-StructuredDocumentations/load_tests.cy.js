describe('Loading tests of the "Features Structured Documentations" subpage in the DOCSbit system', () => {
    beforeEach(() => {
        cy.visit("/feature/structured-documentation");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/feature/structured-documentation").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/feature/structured-documentation");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - Structured Documentation");
    });
});
