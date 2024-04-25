describe('Loading tests of the "Features" subpage in the DOCSbit system', () => {
    beforeEach(() => {
        cy.visit("/features");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/features").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/features");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - Features of the system");
    });
});
