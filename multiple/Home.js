
"use strict";
let Page = require('./page');
let NavigationBar = require('./NavigationBar');

class HomePage extends NavigationBar(Page) {
 get title() { return console.log('browser.element(\'//header/h1\');') }
 get description() { return console.log('browser.element(\'//header/h2\');') }
 open() {
   super.open('');
 }
 getTitle() {
    console.log('Run getTitle()...');
   this.title;
 }
 getDescription() {
    console.log('Run getDescription()...');
   this.description;
 }
}
module.exports = new HomePage();