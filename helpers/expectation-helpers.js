const expect = require('chai').expect;

/**
 * Verify whether an element is displayed or not
 *
 * @param  {WebElementPromise}    webElement - the web element to check
 *
 * @return {Promise}
 */
const verifyIsDisplayed = async (webElement) => {
    await expect(await webElement.isDisplayed(),
        `Элемент "${webElement}" должен отображаться`).to.be.true;
};

module.exports = {
    verifyIsDisplayed,
};
