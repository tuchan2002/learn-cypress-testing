const navbarText = Cypress.env("navbarText");
describe("My First Test", () => {
    before(() => {
        cy.visit("https://example.cypress.io/");
    });
    it("has an h1 on the page", () => {
        cy.get("h1").should("exist");
    });
    it("renders the correct h1 text", () => {
        cy.get("h1").should("contain.text", "Kitchen Sink");
    });
    it("has an url is /commands/actions", () => {
        cy.contains("type").click();
        // cy.pause();
        // cy.get(".action-email")
        //     .type("fake@email.com")
        //     .should("have.value", "fake@email.com");
    });
    it("renders an p under h1", () => {
        cy.get(".container").eq(1).find("p").should("exist");
    });
    it("renders a section with the correct elements", () => {
        cy.get(".container").within(() => {
            cy.get("h4").should("exist");
            cy.get("p").should("exist");
        });
    });
    it("correctly renders the cypress website link", () => {
        cy.findByText(navbarText).should("exist");
    });
    it("types into an email field", () => {
        cy.wait(5000).then(() => {
            fetch("https://api.spacexdata.com/v3/missions")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
            console.log("test in then!");
        });
        cy.findByPlaceholderText("Email").type("test@gmail.com");
        cy.log("cypress log used!");
        console.log("test is finished!");
    });
    it("shows an active class for the current page", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.get(".dropdown-menu")
            .find("li")
            .eq(2)
            .should("have.class", "active");
    });
    it("should not have an class on inactive pages", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.get(".dropdown-menu")
            .find("li")
            .first()
            .should("not.have.class", "active")
            .find("a")
            .should("have.attr", "href", "/commands/querying");
    });
    it("links to the actions page correctly", () => {
        cy.visit("https://example.cypress.io");
        cy.findAllByText("Actions").first().click({ force: true });
        cy.url().should("include", "commands/actions");
    });
    it("lets you tupe in an input field", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.findByPlaceholderText("Email")
            .type("Test")
            .should("have.value", "Test");
    });
    it("lets you clear an input field", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.findByLabelText("Describe:")
            .type("Test description")
            .should("have.value", "Test description")
            .clear()
            .should("have.value", "");
    });
    it("lets you check a checkbox", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.get('.action-checkboxes [type="checkbox"]')
            .eq(1)
            .check({ force: true })
            .should("be.checked");
    });
});
