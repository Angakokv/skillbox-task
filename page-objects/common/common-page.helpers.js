const appConfig = require('../../config/app.conf');

const navigateTo = async (driver, url) => {
    await driver.get(url);
};

const navigateToModule01Page = async (driver) => {
    const url = appConfig.baseUrl + 'module01/';
    await navigateTo(driver, url);
};

module.exports = {
    navigateToModule01Page,
};
