export class ConfirmOrder {
  ConfirmOrder_ConfirmOrderButton = "#button-confirm";
  ConfirmOrder_SuccessButton = ".btn.btn-primary";

  clickConfirm() {
    cy.get(this.ConfirmOrder_ConfirmOrderButton)
      .should("contain", "Confirm Order")
      .click();
  }
  clickContinue() {
    cy.get(this.ConfirmOrder_SuccessButton).contains("Continue").click();
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );
  }
}
