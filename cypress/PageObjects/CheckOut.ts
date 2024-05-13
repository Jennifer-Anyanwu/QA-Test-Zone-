export class CheckOut {
  CheckOut_FirstName = "#input-payment-firstname";
  CheckOut_LastName = "#input-payment-lastname";
  CheckOut_Email = "#input-payment-email";
  CheckOut_Telephone = "#input-payment-telephone";
  CheckOut_Password = "#input-payment-password";
  CheckOut_ConfirmPassword = "#input-payment-confirm";
  CheckOut_Address1 = "#input-payment-address-1";
  CheckOut_City = "#input-payment-city";
  CheckOut_PostCode = "#input-payment-postcode";
  CheckOut_Country = "#input-payment-country";
  CheckOut_Region = "#input-payment-zone";
  CheckOut_NewsCheckBox = ".custom-control.custom-checkbox > #input-newsletter";
  CheckOut_PolicyCheckBox = "#input-account-agree";
  CheckOut_TCCheckBox = "#input-agree";
  CheckOut_ContinueButton = "#button-save";

  // Personal Details

  enterFirstName(FirstName: string) {
    cy.get(this.CheckOut_FirstName).type(FirstName);
  }
  enterLastName(LastName: string) {
    cy.get(this.CheckOut_LastName).type(LastName);
  }
  enterEmail(Email: string) {
    cy.get(this.CheckOut_Email).type(Email);
  }
  enterPhoneNo(Telephone: string) {
    cy.get(this.CheckOut_Telephone).type(Telephone);
  }
  enterPassword(Password: string) {
    cy.get(this.CheckOut_Password).type(Password);
  }
  enterConfirmPassword(ConfirmPassword: string) {
    cy.get(this.CheckOut_ConfirmPassword).type(ConfirmPassword);
  }

  // Billing Address

  enterAddress1(Address1: string) {
    cy.get(this.CheckOut_Address1).type(Address1);
  }
  enterCity(City: string) {
    cy.get(this.CheckOut_City).type(City);
  }
  enterPostCode(PostCode: string) {
    cy.get(this.CheckOut_PostCode).type(PostCode);
  }
  enterCountry() {
    cy.get(this.CheckOut_Country).select("Nigeria");
  }
  enterRegion() {
    cy.get(this.CheckOut_Region).select("Plateau");
  }
  newsCheckBox() {
    cy.contains("I wish to subscribe to the Your Store newsletter.")
      .scrollIntoView()
      .should("be.visible");
    cy.get(this.CheckOut_NewsCheckBox)
      .should("be.checked")
      .click({ force: true });
  }
  policyCheckBox() {
    cy.get(this.CheckOut_PolicyCheckBox)
      .should("not.be.checked")
      .click({ force: true });
  }
  tcCheckBox() {
    cy.get(this.CheckOut_TCCheckBox)
      .should("not.be.checked")
      .click({ force: true });
  }
  continueButton() {
    cy.get(this.CheckOut_ContinueButton).should("contain", "Continue").click();
  }
}
