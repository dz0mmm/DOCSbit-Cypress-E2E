describe('Tests of functionality and visibility of the section 1', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('The section 1 element should be visible', () => {
        cy.get(".pb-10").should("be.visible");
    });

    it('The company logo should be visible', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('The SVG image sould be visible', () => {
        cy.get("svg.device-container").should("be.visible");
    });
});