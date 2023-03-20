const express = require('express');

const app = express();
const routes = require('./routes');

module.exports = (config) => {
  const log = config.log();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (app.get('env') === 'development') {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  app.use('/', routes(config));

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
