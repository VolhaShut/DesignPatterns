"use strict";
const NavigationBar = Sup => class extends Sup {
    get search() { return console.log('browser.element(\'//div[@id="docsearch"]//input\')'); }
    get searchResult() {return console.log('browser.element(\'//div[@class="algolia-docsearch-suggestion--wrapper"]\');') }
    doSearch(searchCriteria) {
        console.log('this.search.setValue(searchCriteria);');
      this.search();
    }
    goToSearchResult() {
      console.log('this.searchResult.click();');
      this.searchResult();
    }
};

module.exports = NavigationBar;