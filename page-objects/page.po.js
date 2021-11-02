const { Builder, Capabilities } = require("selenium-webdriver");
const chrome                    = require('selenium-webdriver/chrome');
const capsConfig                = require('../config/capabilities.conf');
const chromeConfig              = require('../config/chrome.conf');

class Page {
    constructor() {
    }

    async tearUp() {
        const caps = new Capabilities(capsConfig);
        const opts = new chrome.Options(chromeConfig);

        this.driver = await new Builder()
            .withCapabilities(caps)
            .forBrowser(capsConfig.browserName)
            .setChromeOptions(opts)
            .build();
        await this.driver.manage().setTimeouts( { implicit: 5000 } );
    };

    async tearDown() {
        await this.driver.quit();
    };
}

module.exports = Page;
