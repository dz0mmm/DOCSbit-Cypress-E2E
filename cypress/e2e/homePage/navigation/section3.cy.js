describe('Tests of functionality and visibility of the section 3', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('The section 3 element should be visible', () => {
        cy.get(".bg-white.py-10").should("be.visible");
    });

    it('The company logo should be visible', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('Displays the contact titles with an email address and a "Mail us" button', () => {
        cy.get(".bg-white.py-10 > .container > .row > .mb-4 > .text-primary").should("be.visible").and("contain", "Have any questions?");
        cy.get(".lead").should("be.visible").and("contain", "hello@docsbit.com");
        cy.get(".text-lg-end > .btn").should("be.visible").and("have.attr", "href").and("contain", "mailto:");
    });
});