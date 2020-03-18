const Executor = require('./executor');
const google = require('../scenarios/google');

(async () => {
    const executor = new Executor();
    await executor.run(google.search);
})();