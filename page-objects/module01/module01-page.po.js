const { By }             = require("selenium-webdriver");
const expect             = require('chai').expect;
const expectationHelpers = require('../../helpers/expectation-helpers');

const Page               = require('../page.po');

class Module01Page extends Page {
    constructor() {
        super();

        this.nameFieldBy    = By.name('name');
        this.submitButtonBy = By.className('custom-form__button');
        this.infoMessageBy  = By.className('start-screen__res');

        return (async () => {
            await this.tearUp();
            return this;
        })();
    }

    async inputName(name) {
        await this.driver.findElement(this.nameFieldBy).sendKeys(name);
    };

    async clickSubmit() {
        await this.driver.findElement(this.submitButtonBy).click();
    };

    async getInfoMessage() {
        return await this.driver.findElement(this.infoMessageBy).getText();
    };

    async verifyNameFieldIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.driver.findElement(this.nameFieldBy));
    };

    async verifySubmitButtonIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.driver.findElement(this.submitButtonBy));
    };

    async verifyInfoMessage(actualText, expectedText) {
        await expect(actualText,
            `Получено сообщение "${actualText}", а должно быть выведено сообщение "${expectedText}"`)
            .to.equal(expectedText);
    };
}

module.exports = Module01Page;
