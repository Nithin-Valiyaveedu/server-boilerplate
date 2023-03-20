const express = require('express');
const router = express.Router();

const TestService = require('../../services/TestService');

module.exports = (config) => {
  const testService = new TestService(config.postgres.client);
  router.get('/', async (req, res, next) => {
    try {
      const testData = await testService.getTestData();
      res.send(testData);
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
