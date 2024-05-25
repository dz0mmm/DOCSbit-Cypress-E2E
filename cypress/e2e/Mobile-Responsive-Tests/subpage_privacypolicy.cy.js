describe('Responsiveness tests for the "Privacy Policy" subpage on various mobile devices', () => {
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
                cy.visit("/policy");
            });

            it('The company logo should be visible', () => {
                cy.get(".invoice-brand-img > img").should("be.visible");
            });

            it('It should display key page elements of "Privacy Policy" subpage (navbar, product features, footer)', () => {
                cy.get(".navbar").should("be.visible");
                cy.get(".bg-white > .container").should("be.visible");
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
