const Component = require(path.resolve('../Component'));

class Menu extends Component {
    constructor(name = 'Menu',locator = '.drop-down-menu-section.products-list'){
        super(name, locator);
        this.defineElement('Feature', 'li:nth-of-type(2) a');
    }
}
module.exports = Menu;