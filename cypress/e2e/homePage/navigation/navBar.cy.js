describe('Tests of functionality and visibility of the navigation menu', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('The navbar element should be visible', () => {
        cy.get(".navbar").should("be.visible");
    });

    it('A navigation menu should be present on the page', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('The "Home" button should redirect to the home page', () => {
        cy.get(".navbar").contains("Home").click();
        cy.url().should("include", "/");
    });

    it('The "Features" button should redirect to the "Features" page', () => {
        cy.get(".navbar").contains("Features").click();
        cy.url().should("include", "/features");
    });

    it('The "Knowledgebase" button should redirect to the "Knowledgebase" page', () => {
        cy.get(".navbar").contains("Knowledgebase").click();
        cy.url().should("include", "/knowledge");
    });

    it('The "Home" button should redirect to the login page', () => {
        cy.get(".navbar").contains("Login").click();
        cy.url().should("include", "/login");
    });
});