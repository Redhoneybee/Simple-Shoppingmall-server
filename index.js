const express = require('express');

const app = express();

(async function () {
    await require('./loaders/index')(app);
})();

module.exports = app;
