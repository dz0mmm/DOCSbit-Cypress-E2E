describe('Tests of UI elements on the DOCSbit privacy policy page', () => {
    beforeEach(() => {
        cy.visit("/policy");
    });

    it('The company logo should be visible', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('A navigation menu should be visible on the page', () => {
        cy.get(".navbar").should("be.visible");
    });

    it('A privacy policy section should be visible on the page', () => {
        cy.get(".bg-white > .container").should("be.visible");
    });

    it('Displays the main privacy policy section title', () => {
        cy.get("h1").should("be.visible").and("contain", "Privacy Policy");
    });

    it('Displays the contents of the privacy policy section', () => {
        cy.get(".single-post-text").should("be.visible");
    });

    it('A footer should be visible on the page', () => {
        cy.get(".footer").should("be.visible");
    });

    it('Display the footer with all elements', () => {
        cy.get(".footer-brand").should("be.visible").and("contain", "DOCSbit");
        cy.get(".footer > .container > :nth-child(1) > :nth-child(1) > .mb-3").should("be.visible").and("contain", "Documentations made easy");
        cy.get(".footer > .container > .align-items-center > :nth-child(1)").should("be.visible").and("contain", "Copyright © DOCSbit 2024");
        cy.get(".mb-md-0 > .list-unstyled > .mb-2").should("be.visible").and("contain", "Encrypted Software Company");
        cy.get(":nth-child(4) > .text-uppercase-expanded").should("be.visible").and("contain", "Legal");
    });

    it('Should have working links in the footer', () => {
        cy.get(".list-unstyled > :nth-child(1) > a").contains("Privacy Policy").click();
        cy.url().should("include", "/policy");
        cy.get(".list-unstyled > :nth-child(2) > a").contains("Terms of Service").click();
        cy.url().should("include", "/terms");
        cy.get('.text-md-end > [href="/policy"]').contains("Privacy Policy").click();
        cy.url().should("include", "/policy");
        cy.get('.text-md-end > [href="/terms"]').contains("Terms of Service").click();
        cy.url().should("include", "/terms");
    });
});