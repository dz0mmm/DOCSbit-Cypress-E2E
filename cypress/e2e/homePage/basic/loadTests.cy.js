describe('DOCSbit home page loading tests', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - Home");
    });
});