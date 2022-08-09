/// <reference types="Cypress" />

describe("empty spec", () => {
  it("test deposits", () => {
    cy.visit("https://next.privat24.ua/");
    cy.get("div[class^='root_LeXdN3WW1i'] >div:nth-child(2)").trigger(
      "mouseover"
    );
    cy.get(
      '.root_SEVC83roXn > .root_suV3AzGy2K > [data-qa-value="deposits"] > .sc-caSCKo > .root_aW2zkcfPf0'
    ).trigger("mouseover");
    cy.get(
      '[data-qa-value="deposits_open"] > .sc-caSCKo > .root_aW2zkcfPf0'
    ).click();
    cy.get("table.marginTop3_L2aCv6G_RI");
    cy.get(
      "table.marginTop3_L2aCv6G_RI > tbody tr:first-child > td:last-child"
    );
  });
});
