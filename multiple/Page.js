"use strict";
class Page {
 open(path) {
  console.log('browser.url(' + path +')');
 }
}
module.exports = Page;