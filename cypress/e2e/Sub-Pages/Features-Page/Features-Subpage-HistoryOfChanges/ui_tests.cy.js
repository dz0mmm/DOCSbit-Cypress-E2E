describe('Tests of UI elements on the DOCSbit history of changes page', () => {
    beforeEach(() => {
        cy.visit("/feature/history-of-changes");
    });

    it('The company logo should be visible', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('A navigation menu should be visible on the page', () => {
        cy.get(".navbar").should("be.visible");
    });

    it('A history of changes section should be visible on the page', () => {
        cy.get("main > .bg-light > .container").should("be.visible");
    });

    it('Displays the main history of changes section title', () => {
        cy.get("h1").should("be.visible").and("contain", "History of changes");
    });

    it('Displays the paragraphs and links of history of changes section', () => {
        cy.get(".single-post-text").should("be.visible");
        cy.get(".single-post-text > :nth-child(2)").should("be.visible");
        cy.get(":nth-child(3) > .card-body").should("exist");
        cy.get(".single-post-text > :nth-child(4)").should("be.visible");
        cy.get(":nth-child(5) > .card-body").should("exist");
        cy.get(".single-post-text > :nth-child(6)").should("be.visible");
    });

    it('The "Use DOCSbit for free" button should redirect to the "Register" page', () => {
        cy.get(".d-flex > .btn-primary").contains("Use DOCSbit for free").click();
        cy.url().should("include", "register");
    });

    it('The "Browse DOCSbit features" button should redirect to the "Features" subpage', () => {
        cy.get(".btn-primary-soft").contains("Browse DOCSbit features").click();
        cy.url().should("include", "features");
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