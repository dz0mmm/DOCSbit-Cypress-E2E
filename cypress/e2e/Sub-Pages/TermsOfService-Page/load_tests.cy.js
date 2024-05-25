describe('Loading tests of the "Terms of Service" subpage in the DOCSbit system', () => {
    beforeEach(() => {
        cy.visit("/terms");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/terms").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/terms");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - Privacy policy");
    });
});