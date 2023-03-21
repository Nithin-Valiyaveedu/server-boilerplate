const express = require('express');

const router = express.Router();

const testRoutes = require('./test');
const userRoutes = require('./users');

module.exports = (config) => {
  router.get('/', (req, res) => {
    res.send('Boiler Plate Server Code');
  });

  router.use('/test', testRoutes(config));
  router.use('/user', userRoutes(config));

  return router;
};
