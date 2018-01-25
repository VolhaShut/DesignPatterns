const Page = require(path.resolve('../Page'));
const Menu = require('./menu');

class Home extends Page {
    constructor(selector = '.screen-fill-body', url = '/'){
        super(selector,url);
        this.defineComponent('Menu', new Menu());
    }
}

module.exports = Home;