describe('Loading tests of the "Features History of Changes" subpage in the DOCSbit system', () => {
    beforeEach(() => {
        cy.visit("/feature/history-of-changes");
    });

    it('The page should respond with HTTP status 200', () => {
        cy.request("/feature/history-of-changes").its("status").should("eq", 200);
    });

    it('The page should contain a valid URL', () => {
        cy.url().should("include", "/feature/history-of-changes");
    });

    it('The correct page title should be displayed in the header', () => {
        cy.title().should("include", "DOCSbit - History Of Changes");
    });
});
