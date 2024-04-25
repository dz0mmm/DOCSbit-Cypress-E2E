describe('Tests of UI elements on the DOCSbit home page', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('The company logo should be visible', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('A navigation menu should be present on the page', () => {
        cy.get("nav").should("exist");
    });

    it('The footer should be present on the page', () => {
        cy.get("footer").should("exist");
    });

    it('The "Start for free" button should be visible', () => {
        cy.get(".col-xl-8 > .btn-primary")
            .contains("Start for free")
            .should("be.visible");
    });
});