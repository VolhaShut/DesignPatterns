const {Daily} = require('./DailyDocument');
const {Weekly}= require('./WeeklyDocument');
const {Monthly}=require('./MonthlyDocument');

class DocumentFactory {
    static getDocument(path, type) {
        switch (type) {
            case "Daily": return new IndustryPageExcel(path);
            case "Weekly": return new CountryPageExcel(path);
            case "Monthly": return new TopicPageExcel(path, type);
        }
    }
}

module.exports = {
 DocumentFactory
};