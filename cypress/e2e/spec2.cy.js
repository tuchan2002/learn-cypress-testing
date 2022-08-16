describe("My Second Test", () => {
    before(() => {
        cy.request("https://api.spacexdata.com/v3/missions")
            .its("body")
            .should("have.length", 10);
    });
    beforeEach(() => {
        cy.visit("https://example.cypress.io");
    });
    afterEach(() => {
        cy.log("after each hook is here!");
    });
    after(() => {
        cy.log("the final after hook runs once!");
    });
    it("has an h1 on the page", () => {
        cy.get("h1").should("exist");
    });
    it("renders the correct h1 text", () => {
        cy.get("h1").should("contain.text", "Kitchen Sink");
    });
});
