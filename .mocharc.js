module.exports = {
    color: true,
    exit: false, // could be expressed as "'no-exit': true"
    global: ['jQuery', '$'],
    jobs: 1,
    package: './package.json',
    parallel: false,
    recursive: true,
    retries: 0,
    sort: false,
    timeout: '60000' // same as "timeout: '60s'"
    // timeout: false, // same as "'no-timeout': true" or "timeout: 0"
};
