describe('Tests of functionality and visibility of the header', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('The header element should be visible', () => {
        cy.get(".page-header-ui").should("be.visible");
    });

    it('The company logo should be visible', () => {
        cy.get(".invoice-brand-img > img").should("be.visible");
    });

    it('Displays the main header title and subheader title correctly', () => {
        cy.get(".page-header-ui-title").should("be.visible").and("contain", "Introducing the best tool to spread knowledge across your team!");
        cy.get(".page-header-ui-text").should("be.visible").and("contain", "Build your Software Documentation, Data Dictionary or Knowledge Base with DOCSbit");
    });

    it('The "Start for free" button should redirect to the "Register" page', () => {
        cy.get(".page-header-ui-content").contains("Start for free").click();
        cy.url().should("include", "register");
    });

    it('The "View example docs" button should redirect to the example documents page', () => {
        cy.get(".page-header-ui-content a").contains("View example docs").invoke("removeAttr", "target").click();
        cy.url().should("include", "/example_docsbit_documentation");
    });
});