export class CheckingOut {
  Checkout_SelectItem = ".product-thumb-top";
  Checkout_HoverCartIcon = ".btn.btn-cart.cart-28";
  Checkout_ModalCheckOutButton = ".form-row > :nth-child(2) > .btn";
  Checkout_CartDiv = ".product-action";

  selectItem() {
    cy.get(this.Checkout_SelectItem)
      .first()
      .trigger("mouseover")
      .within(() => {
        cy.get(`${this.Checkout_CartDiv} `)
          .find(`${this.Checkout_HoverCartIcon}`)
          .click({ force: true });
      });
  }
  modalCheckOutButton() {
    cy.get(this.Checkout_ModalCheckOutButton)
      .should("contain", "Checkout")
      .click();
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout"
    );
    cy.get(".card-title").should("contain", "Your Personal Details");
  }
}
