"use strict";
const Page = require('./Page');
const NavigationBar = require('./NavigationBar');

class GuidePage extends NavigationBar(Page) { 
    open() {
        super.open('guide.html');
    }
}
module.exports = new GuidePage(); 