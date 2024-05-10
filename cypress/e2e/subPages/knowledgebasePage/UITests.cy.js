describe('Tests of UI elements on the DOCSbit home page', () => {
    beforeEach(() => {
        cy.visit("/knowledge");
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
        cy.get(".page-header-ui-title").should("be.visible").and("contain", "Knowledgebase");
        cy.get(".page-header-ui-text").should('be.visible')
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\s+/g, ' ').replace(/\u00A0/g, ' ').replace(/–/g, '-');
                expect(normalizedText).to.match(/Welcome to DOCSbit Knowledge Base - your one-stop destination for mastering documentation skills. Access comprehensive guides, visual tutorials, and a vibrant community to elevate your experience. Start exploring now!/);
            });
    });

    it('A product knowledgebase section should be visible on the page', () => {
        cy.get(".bg-light.py-10").should("be.visible");
    });

    it('Display the article card with all elements', () => {
        cy.get(".card").should("be.visible");
        cy.get(".card-body").should("be.visible");
        cy.get(".card-title").should("be.visible").and("contain", "Why is software documentation important?");
        cy.get(".card-text").should("be.visible").and("contain", "Software documentation is like a guidebook for computer programs.")
        cy.get(".card-footer").should("be.visible");
        cy.get(".post-preview-meta-details-name").should("be.visible").and("contain", "Mac");
        cy.get(".post-preview-meta-details-date").should("be.visible").and("contain", "5 min read");
        cy.get(".post-preview-meta-img").should('be.visible').and('have.attr', 'src').should('include', 'profile-4.png');
    });
    //
    it('Should have working link in the article card', () => {
        cy.get(".card").click();
        cy.url().should("include", "/knowledge/why-is-software-documentation-important");
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