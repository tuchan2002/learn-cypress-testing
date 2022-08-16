const token = "abcd1234";
describe("Spec 5", () => {
    it("sets and gets a token in local storage", () => {
        cy.setLocalStorage("token", token);
        cy.getLocalStorage("token").should("eq", token);
    });

    it("overwrites the type command by using sensitive characters", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.findByPlaceholderText("Email").type("test@gmail.com");
        cy.findByPlaceholderText("Email").type("test@gmail.com", {
            sensitive: true,
        });
    });
});
