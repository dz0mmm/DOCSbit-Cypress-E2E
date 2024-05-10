describe('Tests of UI elements on the DOCSbit home page', () => {
    beforeEach(() => {
        cy.visit("/features");
    });

    it('The company logo should be visible', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('A navigation menu should be visible on the page', () => {
        cy.get(".navbar").should("be.visible");
    });

    it('A header should be visible on the page', () => {
        cy.get(".page-header-ui").should("be.visible");
    });

    it('Displays the main header title and subheader title correctly', () => {
        cy.get(".page-header-ui-title").should("be.visible").and("contain", "Features");
        cy.get(".page-header-ui-text").should("be.visible").and("contain", "Unlock the power of our product's advanced features and take your document creation process to the next level.");
    });

    it('A product features section should be visible on the page', () => {
        cy.get(".bg-light.py-10").should("be.visible");
    });

    it('Displays the tiles and their internal components', () => {
        cy.get("footer").scrollIntoView();
        cy.get(".card-body").each(($el) => {
            cy.wrap($el).should("be.visible");
            cy.wrap($el).find(".icon-stack .svg-inline--fa").should("be.visible");
            cy.wrap($el).find("h5").should("be.visible");
            cy.wrap($el).find("p.card-text").should("be.visible");
            cy.wrap($el).find("a.btn-primary-soft").should("be.visible").and("contain", "Read more");
        });
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