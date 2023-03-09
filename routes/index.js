const express = require('express');

const router = express.Router();

const testRoutes = require('./test');

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.send('Boiler Plate Server Code');
  });

  router.use('/test', testRoutes(params.testService));

  return router;
};
