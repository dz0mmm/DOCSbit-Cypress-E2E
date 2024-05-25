describe('Tests of UI elements on the DOCSbit home page', () => {
    beforeEach(() => {
        cy.visit("/");
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

    it('A SVG container section should be visible on the page', () => {
        cy.get(".pb-10").should("be.visible");
    });

    it('A product features section should be visible on the page', () => {
        cy.get(".bg-light.py-10").should("be.visible");
    });

    it('A mailto section should be visible on the page', () => {
        cy.get(".bg-white.py-10").should("be.visible");
    });

    it('A footer should be visible on the page', () => {
        cy.get(".footer").should("be.visible");
    });
});