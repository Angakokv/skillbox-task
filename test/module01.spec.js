const appConfig         = require('../config/app.conf');

const commonPageHelpers = require('../page-objects/common/common-page.helpers');
const Module01Page      = require('../page-objects/module01/module01-page.po');

describe('Пользователь успешно авторизуется', function () {
    let module01Page;
    const name = appConfig.users.testUser1.name;

    before(async function() {
        module01Page = await new Module01Page();

        await commonPageHelpers.navigateToModule01Page(module01Page.driver);
    });

    it('Проверить, что поле "Имя" отображается', async function() {
        await module01Page.verifyNameFieldIsDisplayed();
    });

    it('Проверить, что кнопка "Ввод" отображается', async function() {
        await module01Page.verifySubmitButtonIsDisplayed();
    });

    describe('Пользователь ввел имя и нажал кнопку "Ввод"', function () {
        before(async function() {
            await module01Page.inputName(name);
            await module01Page.clickSubmit();
        });

        it('Проверить, что отображается текст приветствия', async function() {
            const actualText = await module01Page.getInfoMessage();
            const expectedText = `Привет, ${name}!`;
            await module01Page.verifyInfoMessage(actualText, expectedText);
        });
    });

    after(async function() {
       await module01Page.tearDown();
    });
});
