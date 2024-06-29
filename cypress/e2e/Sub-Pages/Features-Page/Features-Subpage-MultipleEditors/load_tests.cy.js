describe('Loading tests of the "Multiple Editors" subpage in the DOCSbit system', () => {
    beforeEach(() => {
        cy.visit("/feature/editors");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/feature/editors").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/feature/editors");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - Editors");
    });
});
