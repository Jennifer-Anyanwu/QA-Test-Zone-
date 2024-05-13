export const searchQuery = "phone";

export class Search {
  Search_SearchCategory =
    "#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .btn";
  Search_SelectCategory =
    '#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > [data-category_id="24"]';
  Search_ProductSearch =
    "#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input";
  Search_HpSearchButton = ".type-text";
  Search_ProdDesCheckBox = ".form-row > .col-12 > :nth-child(2)";
  Search_SearchPageSearchButton = "#button-search";
  Search_VerifySearch = "#entry_212456";

  navigate(url: string) {
    cy.visit(url);
  }
  searchCategory() {
    cy.get(this.Search_SearchCategory).click();
  }
  selectCategory() {
    cy.get(this.Search_SelectCategory).click();
  }
  productSearch(ProductSearch: string) {
    cy.get(this.Search_ProductSearch).type(ProductSearch);
  }
  searchHpSearchButton() {
    cy.get(this.Search_HpSearchButton).click();
    cy.url().should(
      "eq",
      `https://ecommerce-playground.lambdatest.io/index.php?route=product%2Fsearch&category_id=24&search=${searchQuery}`
    );
  }
  searchProdDesCheckBox() {
    cy.get(this.Search_ProdDesCheckBox).click();
  }
  searchPageSearchButton() {
    cy.get(this.Search_SearchPageSearchButton).click();
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=phone&category_id=24&description=true"
    );
  }
}
