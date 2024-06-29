describe('Loading tests of the "Custom Styling" subpage in the DOCSbit system', () => {
    beforeEach(() => {
        cy.visit("/feature/styling");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/feature/styling").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/feature/styling");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - Styling");
    });
});
