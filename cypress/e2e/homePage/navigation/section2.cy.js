describe('Tests of functionality and visibility of the section 2', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('The section 2 element should be visible', () => {
        cy.get(".bg-light.py-10").should("be.visible");
    });

    it('The company logo should be visible', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('Displays the section title and subtitle correctly', () => {
        cy.get(".text-center > .text-xs").should("be.visible").and("contain", "Features that Empower You");
        cy.get(".text-center > .mb-5").should("be.visible").and("contain", "Build Faster, Collaborate Better");
    });

    it('Displays the tiles and their internal components', () => {
        cy.get(".bg-white.py-10").scrollIntoView();
        cy.get(".card-body").each(($el) => {
            cy.wrap($el).should("be.visible");
            cy.wrap($el).find(".icon-stack .svg-inline--fa").should("be.visible");
            cy.wrap($el).find("h5").should("be.visible");
            cy.wrap($el).find("p.card-text").should("be.visible");
            cy.wrap($el).find("a.btn-primary-soft").should("be.visible").and("contain", "Read more");
        });
    });
});