import { Search, searchQuery } from "../PageObjects/Search";
import { CheckingOut } from "../PageObjects/CheckingOut";
import { CheckOut } from "../PageObjects/CheckOut";
import { ConfirmOrder } from "../PageObjects/ConfirmOrder";

interface PersonalInformation {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  address1: string;
  city: string;
  postCode: string;
}
const addPersonalInformation: PersonalInformation = require("../fixtures/userBillingInformation");

const SearchProduct = new Search();
const CheckingOutFlow = new CheckingOut();
const CheckOutFlow = new CheckOut();
const ConfirmOrderFlow = new ConfirmOrder();

let email = "";
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateEmail() {
  const randomId = getRandomInt(10000, 99999);
  email = `jennifer${randomId}@gmail.com`;
}

describe("Positive Product Check Out Test", () => {
  beforeEach(() => {
    // Search for a phone
    SearchProduct.navigate("https://ecommerce-playground.lambdatest.io/");
    SearchProduct.searchCategory();
    SearchProduct.selectCategory();
    SearchProduct.productSearch(searchQuery);
    SearchProduct.searchHpSearchButton();
    SearchProduct.searchProdDesCheckBox();
    SearchProduct.searchPageSearchButton();

    //Checking out from Pop-up Modal
    CheckingOutFlow.selectItem();
    CheckingOutFlow.modalCheckOutButton();
  });

  it("Successfully Checks out when required details are provided", () => {
    //Fill out User Information
    CheckOutFlow.enterFirstName(addPersonalInformation.firstName);
    CheckOutFlow.enterLastName(addPersonalInformation.lastName);
    generateEmail();
    CheckOutFlow.enterEmail(email);
    CheckOutFlow.enterPhoneNo(addPersonalInformation.phoneNumber);
    CheckOutFlow.enterPassword(addPersonalInformation.password);
    CheckOutFlow.enterConfirmPassword(addPersonalInformation.confirmPassword);

    //Fill out Billing Address
    CheckOutFlow.enterAddress1(addPersonalInformation.address1);
    CheckOutFlow.enterCity(addPersonalInformation.city);
    CheckOutFlow.enterPostCode(addPersonalInformation.postCode);
    CheckOutFlow.enterCountry();
    CheckOutFlow.enterRegion();

    //Manage Checkboxes
    CheckOutFlow.newsCheckBox();
    CheckOutFlow.policyCheckBox();
    CheckOutFlow.tcCheckBox();
    CheckOutFlow.continueButton();

    //Confirming Order
    ConfirmOrderFlow.clickConfirm();
    ConfirmOrderFlow.clickContinue();
  });
});

describe("Negative Product Check Out Test", () => {
  beforeEach(() => {
    // Search for a phone
    SearchProduct.navigate("https://ecommerce-playground.lambdatest.io/");
    SearchProduct.searchCategory();
    SearchProduct.selectCategory();
    SearchProduct.productSearch(searchQuery);
    SearchProduct.searchHpSearchButton();
    SearchProduct.searchProdDesCheckBox();
    SearchProduct.searchPageSearchButton();

    //Checking out from Pop-up Modal
    CheckingOutFlow.selectItem();
    CheckingOutFlow.modalCheckOutButton();
  });

  it("Validate that a user cannot successfully Check out when a required field is empty - First Name", () => {
    //Fill out User Information
    CheckOutFlow.enterLastName(addPersonalInformation.lastName);
    generateEmail();
    CheckOutFlow.enterEmail(email);
    CheckOutFlow.enterPhoneNo(addPersonalInformation.phoneNumber);
    CheckOutFlow.enterPassword(addPersonalInformation.password);
    CheckOutFlow.enterConfirmPassword(addPersonalInformation.confirmPassword);

    //Fill out Billing Address
    CheckOutFlow.enterAddress1(addPersonalInformation.address1);
    CheckOutFlow.enterCity(addPersonalInformation.city);
    CheckOutFlow.enterPostCode(addPersonalInformation.postCode);
    CheckOutFlow.enterCountry();
    CheckOutFlow.enterRegion();

    //Manage Checkboxes
    CheckOutFlow.newsCheckBox();
    CheckOutFlow.policyCheckBox();
    CheckOutFlow.tcCheckBox();
    CheckOutFlow.continueButton();

    //Confirming Order
    ConfirmOrderFlow.clickConfirm();
    ConfirmOrderFlow.clickContinue();
  });

  it("Validate that a user cannot successfully Check out when a required field is empty - Last Name", () => {
    //Fill out User Information
    CheckOutFlow.enterFirstName(addPersonalInformation.firstName);
    generateEmail();
    CheckOutFlow.enterEmail(email);
    CheckOutFlow.enterPhoneNo(addPersonalInformation.phoneNumber);
    CheckOutFlow.enterPassword(addPersonalInformation.password);
    CheckOutFlow.enterConfirmPassword(addPersonalInformation.confirmPassword);

    //Fill out Billing Address
    CheckOutFlow.enterAddress1(addPersonalInformation.address1);
    CheckOutFlow.enterCity(addPersonalInformation.city);
    CheckOutFlow.enterPostCode(addPersonalInformation.postCode);
    CheckOutFlow.enterCountry();
    CheckOutFlow.enterRegion();

    //Manage Checkboxes
    CheckOutFlow.newsCheckBox();
    CheckOutFlow.policyCheckBox();
    CheckOutFlow.tcCheckBox();
    CheckOutFlow.continueButton();

    //Confirming Order
    ConfirmOrderFlow.clickConfirm();
    ConfirmOrderFlow.clickContinue();
  });

  it("Validate that a user cannot successfully Check out when a required field is empty - E-Mail", () => {
    //Fill out User Information
    CheckOutFlow.enterFirstName(addPersonalInformation.firstName);
    CheckOutFlow.enterLastName(addPersonalInformation.lastName);
    CheckOutFlow.enterPhoneNo(addPersonalInformation.phoneNumber);
    CheckOutFlow.enterPassword(addPersonalInformation.password);
    CheckOutFlow.enterConfirmPassword(addPersonalInformation.confirmPassword);

    //Fill out Billing Address
    CheckOutFlow.enterAddress1(addPersonalInformation.address1);
    CheckOutFlow.enterCity(addPersonalInformation.city);
    CheckOutFlow.enterPostCode(addPersonalInformation.postCode);
    CheckOutFlow.enterCountry();
    CheckOutFlow.enterRegion();

    //Manage Checkboxes
    CheckOutFlow.newsCheckBox();
    CheckOutFlow.policyCheckBox();
    CheckOutFlow.tcCheckBox();
    CheckOutFlow.continueButton();

    //Confirming Order
    ConfirmOrderFlow.clickConfirm();
    ConfirmOrderFlow.clickContinue();
  });

  it("Validate that a user cannot successfully Check out when registering using an already registered email address ", () => {
    //Fill out User Information
    CheckOutFlow.enterFirstName(addPersonalInformation.firstName);
    CheckOutFlow.enterLastName(addPersonalInformation.lastName);
    CheckOutFlow.enterEmail(email);
    CheckOutFlow.enterPhoneNo(addPersonalInformation.phoneNumber);
    CheckOutFlow.enterPassword(addPersonalInformation.password);
    CheckOutFlow.enterConfirmPassword(addPersonalInformation.confirmPassword);

    //Fill out Billing Address
    CheckOutFlow.enterAddress1(addPersonalInformation.address1);
    CheckOutFlow.enterCity(addPersonalInformation.city);
    CheckOutFlow.enterPostCode(addPersonalInformation.postCode);
    CheckOutFlow.enterCountry();
    CheckOutFlow.enterRegion();

    //Manage Checkboxes
    CheckOutFlow.newsCheckBox();
    CheckOutFlow.policyCheckBox();
    CheckOutFlow.tcCheckBox();
    CheckOutFlow.continueButton();

    //Confirming Order
    ConfirmOrderFlow.clickConfirm();
    ConfirmOrderFlow.clickContinue();
  });
});
