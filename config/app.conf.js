module.exports = {
    baseUrl: process.env.BASE_URL || 'https://lm.skillbox.cc/qa_tester/',
    users: {
        testUser1: {
            name: process.env.USER1_NAME || 'Вася',
        },
    },
};
