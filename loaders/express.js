const express = require('express');

// config
const { index } = require('../config').routes;

// router
const indexRouter = require('../routes/index');

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(index, indexRouter);
}