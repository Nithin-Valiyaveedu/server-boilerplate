const express = require('express');

const app = express();
const routes = require('./routes');

const TestServices = require('./services/TestService');

module.exports = (config) => {
  const log = config.log();

  const testService = new TestServices();

  if (app.get('env') === 'development') {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  app.use('/', routes({testService}));

  app.use((error, req, res) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  return app;
};
