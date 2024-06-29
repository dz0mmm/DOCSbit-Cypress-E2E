describe('Responsiveness tests for the "Structured Documentation" subpage on various mobile devices', () => {
    const devices = [
        "ipad-mini",
        "iphone-6",
        "iphone-8",
        "iphone-x",
        "iphone-xr",
        "samsung-s10",
        "samsung-note9",
    ];

    devices.forEach((device) => {
        context(`Responsiveness test on the device ${device}`, () => {
            beforeEach(() => {
                cy.viewport(device);
                cy.visit("/feature/structured-documentation");
            });

            it('The company logo should be visible', () => {
                cy.get(".invoice-brand-img > img").should("be.visible");
            });

            it('It should display key page elements of "Structured Documentation" subpage (navbar, header, product features, footer)', () => {
                cy.get(".navbar").should("be.visible");
                cy.get("h1").should("be.visible");
                cy.get("main > .bg-light > .container").should("be.visible");
                cy.get(".footer").should("be.visible");
            });

            it('It should toggle the visibility of the navigation menu', () => {
                cy.get(".navbar-toggler").click();
                cy.get("#navbarSupportedContent > .btn").should("be.visible");
                cy.wait(1000);
                cy.get(".navbar-toggler").click();
                cy.get("#navbarSupportedContent > .btn").should("not.be.visible");
            });
        });
    });
});
